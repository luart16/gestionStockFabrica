import { Request, Response } from "express";
import MovimientoStock from "../../modelos/MovimientoStock";
import StockProducto from "../../modelos/StockProducto";
import StockMaterial from "../../modelos/StockMaterial";


interface DatosMovimiento {
  tipo: "ingreso" | "egreso" | "transferencia";
  esProducto: boolean;
  cantidad: number;
  sucursalOrigenId?: string;
  sucursalDestinoId?: string;
  productoId?: string;
  materialId?: string;
}

export const crearMovimientoStock = async (req: Request, res: Response)=> {
  try {
    const { tipo, esProducto, cantidad, sucursalOrigenId, sucursalDestinoId, productoId, materialId } = req.body as DatosMovimiento;

    // Validaciones iniciales:
    if (cantidad <= 0) {
      res.status(400).json({ error: "La cantidad debe ser mayor a cero." });
      return
    }
    if (tipo === "ingreso" && !sucursalDestinoId) {
      res.status(400).json({ error: "Para un ingreso se requiere sucursalDestinoId." });
      return;
    }

    if (tipo === "egreso" && !sucursalOrigenId) {
      res.status(400).json({ error: "Para un egreso se requiere sucursalOrigenId." });
      return;
    }

    if (tipo === "transferencia" && (!sucursalOrigenId || !sucursalDestinoId)) {
      res.status(400).json({
        error: "Para una transferencia se requieren sucursalOrigenId y sucursalDestinoId.",
      });
      return;
    }

    if (esProducto && !productoId) {
      res.status(400).json({ error: "Falta el productoId para un movimiento de producto." });
      return;
    }

    if (!esProducto && !materialId) {
      res.status(400).json({ error: "Falta el materialId para un movimiento de material." });
      return;
    }

    // Crear movimiento
    const nuevoMovimiento = new MovimientoStock({
      tipo,
      esProducto,
      cantidad,
      sucursalOrigenId,
      sucursalDestinoId,
      productoId,
      materialId,
    });
    await nuevoMovimiento.save();

    // Lógica de actualización de stock
    if (esProducto) {
      // Trabajamos con productos
      if (tipo === "ingreso") {
        const stock = await StockProducto.findOne({ productoId, sucursalId: sucursalDestinoId });
        if (stock) {
          stock.cantidad = (stock.cantidad || 0) + cantidad;
          stock.enStock = true;
          await stock.save();
        } else {
          await new StockProducto({
            productoId,
            sucursalId: sucursalDestinoId,
            cantidad,
            enStock: true,
          }).save();
        }
      }

      if (tipo === "egreso") {
        const stock = await StockProducto.findOne({ productoId, sucursalId: sucursalOrigenId });
        if (!stock || (stock.cantidad ?? 0) < cantidad) {
          res.status(400).json({ error: "Stock insuficiente para egreso." });
          return;
        }
        stock.cantidad! -= cantidad;
        stock.enStock = stock.cantidad! > 0;
        await stock.save();
      }

      if (tipo === "transferencia") {
        const origen = await StockProducto.findOne({ productoId, sucursalId: sucursalOrigenId });
        if (!origen || (origen.cantidad ?? 0) < cantidad) {
          res.status(400).json({ error: "Stock insuficiente para transferir." });
          return;
        }
        origen.cantidad! -= cantidad;
        origen.enStock = origen.cantidad! > 0;
        await origen.save();

        const destino = await StockProducto.findOne({ productoId, sucursalId: sucursalDestinoId });
        if (destino) {
          destino.cantidad = (destino.cantidad || 0) + cantidad;
          destino.enStock = true;
          await destino.save();
        } else {
          await new StockProducto({
            productoId,
            sucursalId: sucursalDestinoId,
            cantidad,
            enStock: true,
          }).save();
        }
      }
    } else {
      // Trabajamos con materiales
      if (tipo === "ingreso") {
        const stock = await StockMaterial.findOne({ materialId, sucursalId: sucursalDestinoId });
        if (stock) {
          stock.cantidad = (stock.cantidad || 0) + cantidad;
          stock.enStock = true;
          await stock.save();
        } else {
          await new StockMaterial({
            materialId,
            sucursalId: sucursalDestinoId,
            cantidad,
            enStock: true,
          }).save();
        }
      }

      if (tipo === "egreso") {
        const stock = await StockMaterial.findOne({ materialId, sucursalId: sucursalOrigenId });
        if (!stock || (stock.cantidad ?? 0) < cantidad) {
          res.status(400).json({ error: "Stock insuficiente para egreso." });
          return;
        }
        stock.cantidad! -= cantidad;
        stock.enStock = stock.cantidad! > 0;
        await stock.save();
      }

      if (tipo === "transferencia") {
        const origen = await StockMaterial.findOne({ materialId, sucursalId: sucursalOrigenId });
        if (!origen || (origen.cantidad ?? 0) < cantidad) {
          res.status(400).json({ error: "Stock insuficiente para transferir." });
          return;
        }
        origen.cantidad! -= cantidad;
        origen.enStock = origen.cantidad! > 0;
        await origen.save();

        const destino = await StockMaterial.findOne({ materialId, sucursalId: sucursalDestinoId });
        if (destino) {
          destino.cantidad = (destino.cantidad || 0) + cantidad;
          destino.enStock = true;
          await destino.save();
        } else {
          await new StockMaterial({
            materialId,
            sucursalId: sucursalDestinoId,
            cantidad,
            enStock: true,
          }).save();
        }
      }
    }

    res.status(201).json({ message: "Movimiento registrado y stock actualizado correctamente." });
  } catch (error) {
    console.error("Error en crearMovimientoStock:", error);
    res.status(500).json({ error: "Error interno al registrar el movimiento." });
  }
};
