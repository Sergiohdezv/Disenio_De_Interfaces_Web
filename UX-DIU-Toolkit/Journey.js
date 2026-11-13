/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

                Id: 0,
                Name: "Leonor Martín",
                Photo: "woman.png",

                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere unificar toda su actividad cultural en un solo perfil.",
                touch1: "Redes sociales (Instagram, Twitter)",
                feel1: "2",
                con1: "Usa Letterboxd, Goodreads, Backloggd y Spotify; odia tenerlo todo separado.",
                ima1: "leonor1.png",

                /*** PASO #2: DECICION ***/ 
                goal2: "Busca una plataforma moderna, rápida y visual que integre todos los medios.",
                touch2: "Blogs, foros, TikTok, YouTube",
                feel2: "3",
                con2: "Las apps actuales solo cubren un medio y tienen interfaces recargadas.",
                ima2: "leonor2.png",

                /*** PASO #3: ACTUA ***/ 
                goal3: "Visita la plataforma y revisa si realmente unifica películas, series, libros, música y videojuegos.",
                touch3: "Landing page / Registro",
                feel3: "4",
                con3: "Si la web tarda más de 5 segundos o es confusa, abandona.",
                ima3: "leonor3.png",

                /*** PASO #4: OBSERVA ***/ 
                goal4: "Prueba el buscador y las fichas de contenido.",
                touch4: "Buscador / Fichas / Sistema de registro",
                feel4: "4",
                con4: "Fichas incompletas o buscadores pobres le frustran.",
                ima4: "leonor4.png",

                /*** PASO #5: ANALIZA ***/ 
                goal5: "Explora listas, recomendaciones y estadísticas visuales.",
                touch5: "Perfil / Listas / Recomendaciones / Estadísticas",
                feel5: "5",
                con5: "Recomendaciones repetitivas o poca personalización del perfil.",
                ima5: "leonor5.png",

                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Integra la plataforma en su rutina diaria para registrar todo en menos de 10 segundos.",
                touch6: "Historial / Panel de actividad",
                feel6: "5",
                con6: "Si la plataforma no es rápida o visual, vuelve a usar sus apps anteriores.",
                ima6: "leonor6.png",
            },

			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

                Id: 1,
                Name: "Fran Perea",
                Photo: "man.png",

                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizar mejor su ocio irregular y recordar lo que deja a medias.",
                touch1: "Conversaciones con amigos frikis / TikTok",
                feel1: "3",
                con1: "Usa Backloggd, MyAnimeList y Letterboxd; todo está separado.",
                ima1: "fran1.png",

                /*** PASO #2: DECICION ***/ 
                goal2: "Busca una plataforma simple y rápida donde registrar todo sin complicarse.",
                touch2: "YouTube, Reddit, MeriStation",
                feel2: "3",
                con2: "Interfaces complicadas y diseños recargados le hacen abandonar.",
                ima2: "fran2.png",

                /*** PASO #3: ACTUA ***/ 
                goal3: "Accede a la plataforma para comprobar si puede registrar contenido fácilmente.",
                touch3: "Página principal / Registro",
                feel3: "4",
                con3: "Si tarda en cargar portadas, se frustra y se va.",
                ima3: "fran3.png",

                /*** PASO #4: OBSERVA ***/ 
                goal4: "Explora fichas, progreso y buscador.",
                touch4: "Buscador / Fichas / Sistema de progreso",
                feel4: "3",
                con4: "Fichas incompletas o buscadores lentos le molestan.",
                ima4: "fran4.png",

                /*** PASO #5: ANALIZA ***/ 
                goal5: "Revisa sus pendientes y recomendaciones rápidas.",
                touch5: "Historial / Panel de pendientes / Recomendaciones",
                feel5: "4",
                con5: "Si las recomendaciones no encajan, pierde interés.",
                ima5: "fran5.png",

                /*** PASO #6: CONCLUSION ***/ 
                goal6: "Encuentra una herramienta práctica que le ahorre tiempo.",
                touch6: "Panel unificado de consumo",
                feel6: "5",
                con6: "Si la interfaz es confusa, vuelve a sus webs anteriores.",
                ima6: "fran6.png",
            }

		];
        
		$scope.model = $scope.Journeys[0];

	}])



