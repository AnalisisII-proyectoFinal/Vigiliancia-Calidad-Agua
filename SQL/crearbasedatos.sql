CREATE TABLE [dbo].[tbl_asignacion_tanque_hilo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_tanque] [int] NOT NULL,
	[id_hilo] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_asignacion_tanque_hilo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ayuda]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ayuda](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tipo] [varchar](100) NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
	[uri_file] [varchar](200) NOT NULL,
 CONSTRAINT [PK_tbl_ayuda] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_datos_centro_salud]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_datos_centro_salud](
	[id] [int] NOT NULL,
	[departamento] [varchar](100) NOT NULL,
	[municipio] [varchar](100) NOT NULL,
	[area_salud] [varchar](50) NOT NULL,
	[servicio_salud] [varchar](50) NOT NULL,
	[distrito_salud] [varchar](50) NOT NULL,
	[director_salud] [varchar](100) NOT NULL,
	[uri_logo_salud] [varchar](200) NOT NULL,
	[uri_logo_siv] [varchar](200) NOT NULL,
	[fecha_modificacion] [datetime] NOT NULL,
 CONSTRAINT [PK_tbl_datos_centro_salud] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_empleado]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_empleado](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[primer_nombre] [varchar](100) NOT NULL,
	[segundo_nombre] [varchar](100) NOT NULL,
	[primer_apellido] [varchar](100) NOT NULL,
	[segundo_apellido] [varchar](100) NOT NULL,
	[dpi] [varchar](100) NOT NULL,
	[sexo] [varchar](50) NOT NULL,
	[direccion] [varchar](200) NOT NULL,
	[cargo] [varchar](100) NOT NULL,
	[telefono] [varchar](100) NOT NULL,
	[correo_electronico] [varchar](100) NOT NULL,
	[fecha_nacimiento] [date] NOT NULL,
	[fecha_creacion] [date] NOT NULL,
	[uri_avatar] [varchar](200) NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_empleado] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_hilo]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_hilo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha_inicio] [date] NOT NULL,
	[fecha_fin] [date] NOT NULL,
	[descripcion] [varchar](200) NULL,
	[id_usuario] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_hilo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_historial_reporte]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_historial_reporte](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NOT NULL,
	[tipo] [varchar](100) NOT NULL,
	[id_usuario] [int] NOT NULL,
 CONSTRAINT [PK_tbl_historial_reporte] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_historialcopia]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_historialcopia](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](100) NOT NULL,
	[fecha_hora] [datetime] NOT NULL,
	[id_usuario] [int] NOT NULL,
 CONSTRAINT [PK_tbl_historialcopia] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_institucion]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_institucion](
	[id] [int] NOT NULL,
	[entidad] [varchar](100) NOT NULL,
	[dependencia] [varchar](100) NOT NULL,
	[nombre_aplicacion] [varchar](200) NOT NULL,
	[mision] [text] NOT NULL,
	[vision] [text] NOT NULL,
	[uri_logotipo] [varchar](200) NOT NULL,
	[uri_img_mision] [varchar](200) NOT NULL,
	[uri_img_vision] [varchar](200) NOT NULL,
	[fecha_modificacion] [date] NOT NULL,
 CONSTRAINT [PK_tbl_institucion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_mantenimiento]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_mantenimiento](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](100) NOT NULL,
	[descripcion] [text] NOT NULL,
	[uri_img] [varchar](200) NOT NULL,
	[fecha] [date] NOT NULL,
	[id_tanque] [int] NOT NULL,
	[id_usuario] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_mantenimiento] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_metodo_cloracion]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_metodo_cloracion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tratamiento] [varchar](100) NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_metodo_cloracion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_muestra]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_muestra](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_punto_muestra] [int] NOT NULL,
	[lugar] [varchar](100) NOT NULL,
	[ph] [varchar](50) NOT NULL,
	[cloro_residual] [varchar](50) NOT NULL,
	[fecha] [date] NOT NULL,
	[hora] [time](7) NOT NULL,
	[id_usuario] [int] NOT NULL,
	[id_hilo] [int] NOT NULL,
	[id_tanque] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_muestra] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_permisos]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_permisos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[tipo] [varchar](50) NOT NULL,
	[descripcion] [varchar](300) NOT NULL,
 CONSTRAINT [PK_tbl_permisos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_publicacion]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_publicacion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[titulo] [varchar](100) NOT NULL,
	[fecha] [date] NOT NULL,
	[descripcion] [text] NOT NULL,
	[uri_img] [varchar](200) NOT NULL,
	[estado_public] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_publicacion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_punto_muestra]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_punto_muestra](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](200) NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_punto_muestra] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_tanque]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_tanque](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NOT NULL,
	[numero] [int] NOT NULL,
	[ubicacion] [varchar](300) NOT NULL,
	[largo] [varchar](50) NOT NULL,
	[ancho] [varchar](50) NOT NULL,
	[alto] [varchar](50) NOT NULL,
	[fecha_inicio] [date] NOT NULL,
	[uri_img] [varchar](200) NOT NULL,
	[estado] [int] NOT NULL,
	[id_usuario] [int] NOT NULL,
	[id_cloracion] [int] NOT NULL,
 CONSTRAINT [PK_tbl_tanque] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_usuario]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[usuario] [varchar](100) NOT NULL,
	[contrasena] [varchar](200) NOT NULL,
	[id_permiso] [int] NOT NULL,
	[estado] [int] NOT NULL,
	[id_empleado] [int] NULL,
 CONSTRAINT [PK_tbl_usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_usuario_appmovil]    Script Date: 28/09/2021 10:30:02 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_usuario_appmovil](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NOT NULL,
	[id_usuario] [int] NOT NULL,
	[estado_acceso] [int] NOT NULL,
	[estado] [int] NOT NULL,
 CONSTRAINT [PK_tbl_usuario_appmovil] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
