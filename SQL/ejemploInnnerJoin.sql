ALTER PROC dbo.uspmuestrasactivasapp
	@idt INT
AS
	SELECT dm.id,tm.tipo_muestra AS tm,dm.ph,dm.cloro_residual AS cl,t.nombre AS tanq,t.ubicacion AS ubi
	FROM dbo.tbl_detalle_muestra dm INNER JOIN dbo.tbl_tanque t ON(t.id=dm.id_tanque)
	INNER JOIN dbo.tbl_tipo_muestra tm ON(tm.id=dm.id_tipo_muestra) WHERE dm.estado=1 AND dm.id_tanque=@idt;
Go


execute dbo.uspmuestrasactivasapp @idt=2;


SELECT dm.id,tm.tipo_muestra,dm.ph,dm.cloro_residual,t.nombre,t.ubicacion
FROM dbo.tbl_detalle_muestra dm INNER JOIN dbo.tbl_tanque t ON(t.id=dm.id_tanque)
INNER JOIN dbo.tbl_tipo_muestra tm ON(tm.id=dm.id_tipo_muestra) WHERE dm.estado=1;