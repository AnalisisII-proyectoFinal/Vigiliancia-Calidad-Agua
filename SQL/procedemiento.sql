--- procedemientos
CREATE PROC [dbo].[actualizardatosinstitucion]
	@ent varchar(100),
	@dep varchar(100),
	@app varchar(200),
	@logo varchar(200),
	@mision text,
	@imgm varchar(200),
	@vision text,
	@imgv varchar(200)
AS
	UPDATE dbo.tbl_institucion SET entidad=@ent,dependencia=@dep,
	nombre_aplicacion=@app,uri_logotipo=@logo,mision=@mision,uri_img_mision=@imgm,vision=@vision,uri_img_vision=@imgv, fecha_modificacion=SYSDATETIME() WHERE id=1; 
GO
/****** Object:  StoredProcedure [dbo].[actualizardatossalud]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[actualizardatossalud]
	@dep varchar(100),
	@mun varchar(100),
	@aresal varchar(50),
	@sersal varchar(50),
	@dissal varchar(50),
	@dirsal varchar(100),
	@logsal varchar(200),
	@logsiv varchar(200)
AS
	UPDATE dbo.tbl_datos_centro_salud SET departamento=@dep,municipio=@mun,area_salud=@aresal,servicio_salud=@sersal,distrito_salud=@dissal,director_salud=@dirsal,uri_logo_salud=@logsal,uri_logo_siv=@logsiv, fecha_modificacion=SYSDATETIME() WHERE id=1; 
GO
/****** Object:  StoredProcedure [dbo].[pr_obtnerempleado_usuario]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROCEDURE [dbo].[pr_obtnerempleado_usuario]  
    @primernombre nvarchar(50)   
AS   
    SET NOCOUNT ON;  
    SELECT primer_nombre,primer_apellido,cargo  
    FROM dbo.tbl_empleado  
    WHERE primer_nombre = @primernombre;
GO
/****** Object:  StoredProcedure [dbo].[uspcambiarestadousuariomovil]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspcambiarestadousuariomovil]
	@idu INT,
	@acceso INT
AS
	UPDATE dbo.tbl_usuario_appmovil SET estado_acceso=@acceso WHERE id=@idu;
GO
/****** Object:  StoredProcedure [dbo].[uspeliminarpublicacion]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspeliminarpublicacion]
	@id INT
AS
	UPDATE dbo.tbl_publicacion SET estado=0 WHERE id=@id;
GO
/****** Object:  StoredProcedure [dbo].[uspeliminarusuariomovil]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspeliminarusuariomovil]
	@idus INT
AS
	UPDATE dbo.tbl_usuario_appmovil SET estado=0,estado_acceso=0 WHERE id=@idus;
GO
/****** Object:  StoredProcedure [dbo].[uspnuevapublicacion]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspnuevapublicacion]
	@titulo varchar(100),
	@fecha date,
	@descripcion Text,
	@img varchar(200)
AS
	Insert into dbo.tbl_publicacion(titulo,fecha,descripcion,uri_img,estado_public,estado)values(@titulo,@fecha,@descripcion,@img,1,1);
GO
/****** Object:  StoredProcedure [dbo].[uspnuevohilo]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[uspnuevohilo]
	@fechafinv date,
	@idusuario int,
	@idtanque int
as
	declare @cantidadt int;
	declare @idhilo int;
	select @cantidadt=COUNT(estado) from dbo.tbl_tanque;
	if @cantidadt > 0 begin
		insert into dbo.tbl_hilo(fecha_inicio,fecha_fin,descripcion,id_usuario,estado)
		values(SYSDATETIME(),@fechafinv,'prueba',@idusuario,1)
		insert into dbo.tbl_muestra(id_punto_muestra,lugar,ph,cloro_residual,fecha,hora,id_usuario,id_hilo,id_tanque,estado)
		values(1,'cabecera',0,0,SYSDATETIME(),SYSDATETIME(),@idusuario,1,1,1)
	end
GO
/****** Object:  StoredProcedure [dbo].[uspnuevousuarioapp]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspnuevousuarioapp]
	@usuario varchar(50),
	@result  INT OUTPUT
AS
	DECLARE @etblusuario AS INT;
	DECLARE @etblapp AS INT;
	DECLARE @idus AS INT;
	SELECT @etblusuario=COUNT(u.usuario),@etblapp=COUNT(ap.id_usuario) FROM dbo.tbl_usuario u LEFT JOIN dbo.tbl_usuario_appmovil ap ON(u.id=ap.id_usuario AND ap.estado=1) WHERE u.usuario=@usuario AND u.estado=1;
	IF(@etblusuario = 1 AND @etblapp = 0)BEGIN
		SELECT @idus=u.id FROM dbo.tbl_usuario u WHERE u.usuario=@usuario;
		INSERT INTO dbo.tbl_usuario_appmovil(fecha,id_usuario,estado_acceso,estado) VALUES(SYSDATETIME(),@idus,1,1);
		SET @result=1;
	END
	ELSE BEGIN
		SET @result=0;
	END
	RETURN @result;
GO
/****** Object:  StoredProcedure [dbo].[uspobtenerpublicaciones]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspobtenerpublicaciones]
AS
	SELECT id AS idp,titulo,fecha,descripcion,uri_img AS img,estado_public AS estadop FROM dbo.tbl_publicacion WHERE estado=1;
GO
/****** Object:  StoredProcedure [dbo].[uspobtnerdatoscentrosalud]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspobtnerdatoscentrosalud]
AS
	SELECT departamento,municipio,area_salud as arsal,servicio_salud as sersal,
	distrito_salud as dissal,director_salud as dirsal,fecha_modificacion as fecha FROM dbo.tbl_datos_centro_salud WHERE id=1;
GO
/****** Object:  StoredProcedure [dbo].[uspobtnerdatosinstitucion]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspobtnerdatosinstitucion]
AS
	SELECT entidad,dependencia,nombre_aplicacion as app, mision, vision,fecha_modificacion as fecha FROM dbo.tbl_institucion WHERE id=1;
GO
/****** Object:  StoredProcedure [dbo].[uspobtnerusuariosappmovil]    Script Date: 28/09/2021 10:30:02 ******/

CREATE PROC [dbo].[uspobtnerusuariosappmovil]
AS
	SELECT u.usuario AS usuario,CONCAT(CONCAT(e.primer_apellido,' '),e.primer_nombre) AS empleado,e.cargo,ap.fecha,ap.estado_acceso AS acceso, 
	ap.id as idu FROM dbo.tbl_usuario_appmovil ap JOIN dbo.tbl_usuario u ON(ap.id_usuario=u.id) JOIN dbo.tbl_empleado e ON(u.id_empleado=e.id) WHERE ap.estado=1;
GO

/****-- ****/
SELECT * FROM dbo.tbl_hilo;