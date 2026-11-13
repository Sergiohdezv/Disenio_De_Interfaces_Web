/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [

			{   
				/*************************************/
				/**** PRIMERA PERSONA (Leonor) *******/
				/*************************************/
				
				Id: 0,
				Name: "Leonor Martín",
				Photo: "woman.png",
				Quote: "Organizar es entenderse a uno mismo",
				Age: 25,
				Occupation: "Diseñadora gráfica freelance",
				Family: "Vive sola, pareja ocasional",
				Location: "Málaga (Centro)",
				Character: "Apasionada de la cultura digital y del diseño",
				
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs Extrov/activo", Value: 2 },
					{ Name: "Realista/práctico Vs Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico Vs Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático Vs Colérico/visceral", Value: 2 }
				],
				
				Goals: [
					"Unificar toda su actividad cultural en una sola plataforma",
					"Descubrir contenido nuevo basado en sus gustos globales",
					"Registrar lo que consume de forma rápida y sin complicaciones"
				],
				
				Frustrations: [
					"Odia tener que usar varias apps distintas para cada tipo de contenido",
					"Le frustra que las recomendaciones no sean precisas",
					"Abandona webs con demasiada publicidad"
				],
				
				Bio: "Leonor es una diseñadora gráfica freelance que consume cine, series, libros, música y videojuegos. Actualmente usa varias plataformas separadas para cada medio, lo que le resulta incómodo y poco práctico. Busca una plataforma moderna y visual donde pueda registrar todo lo que consume y ver estadísticas globales.",
				
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 4 }
				],
				
				Contextos: "Quiere organizar mejor su tiempo libre y tener una visión global de todo lo que consume sin complicarse.",
				
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},

			{   
				/*************************************/
				/**** SEGUNDA PERSONA (Fran)   *******/
				/*************************************/
				
				Id: 1,
				Name: "Fran Perea",
				Photo: "man.png",
				Quote: "Si algo te gusta, disfrútalo sin complicaciones",
				Age: 40,
				Occupation: "Empleado de gasolinera",
				Family: "Vive con su pareja desde hace 3 años",
				Location: "Sevilla (Dos Hermanas)",
				Character: "Friki, constante y amante del ocio digital",
				
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs Extrov/activo", Value: 3 },
					{ Name: "Realista/práctico Vs Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico Vs Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático Vs Colérico/visceral", Value: 3 }
				],
				
				Goals: [
					"Registrar rápidamente lo que ve, juega o escucha",
					"Tener un historial unificado de todo su ocio",
					"Recordar qué series dejó a medias y qué juegos tiene pendientes"
				],
				
				Frustrations: [
					"Odia las interfaces complicadas o recargadas",
					"Le molesta tener que usar varias webs distintas",
					"Abandona webs con buscadores poco precisos"
				],
				
				Bio: "Fran trabaja en una gasolinera con turnos rotativos, así que su tiempo libre es irregular. Es un friki de toda la vida: videojuegos, anime, cine y música. Usa varias plataformas para seguir su actividad, pero le molesta tenerlo todo separado. Busca una web simple y clara donde pueda ver todo lo que consume sin complicarse.",
				
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }
				],
				
				Contextos: "Quiere organizar mejor su ocio porque su tiempo libre es irregular. Busca una plataforma sencilla y rápida.",
				
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])