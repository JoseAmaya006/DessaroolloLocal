document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const dashboardPage = document.getElementById('dashboard-page');
    const loginPage = document.getElementById('login-page');
    
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block';
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el registro
        alert('Registro exitoso');
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });

    const buttons = document.querySelectorAll('.round-btn');
    const contentContainer = document.getElementById('content-container');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            loadContent(target);
        });
    });

    function loadContent(target) {
        let content = '';
        switch (target) {
            case 'unit1':
                content = `
                    <h2>Unidad 1</h2>
                    <h3>Las Naciones Unidas y el Derecho Internacional Humanitario</h3>
                    <p>Boletín del Secretario General de la ONU. Ámbito de aplicación</p>
                    <p>Los factores de influencia</p>
                `;
                break;
            case 'unit2':
                content = `
                    <h2>Unidad 2</h2>
                    <h3>El derecho internacional público y sus vertientes relacionadas con los conflictos armados</h3>
                    <p><strong>Módulo 1:</strong> El Derecho Internacional Humanitario y los Derechos Humanos</p>
                    <p><strong>Módulo 2:</strong> El derecho internacional de los conflictos armados.</p>
                    <p>Concepto de Derecho Internacional Aplicable a los Conflictos Armados</p>
                    <p>Finalidad y Principios</p>
                    <p><strong>Módulo 3:</strong> Derecho Internacional de Refugiados.</p>
                    <p>Concepto de Derecho Internacional de Refugiados</p>
                    <p>Finalidad y Principios.</p>
                `;
                break;
                case 'unit3':
                    content = `
                        <h2>Unidad 3</h2>
                        <h3>Aplicación y difusión del DICA. Ejecución de los convenios</h3>
                        <p><strong>Módulo 1:</strong> Ejecución de los Convenios</p>
                        <p>Respeto de los Convenios</p>
                        <p>Convenios internacionales del DICA</p>
                        <p><strong>Módulo 2:</strong> Aplicación del DICA (material, espacial, personal y temporal)</p>
                        <p><strong>Módulo 3:</strong> Comienzo de las hostilidades.</p>
                        <p>Declaración de guerra (denominación de uso tradicional) o conflicto armado</p>
                        <p>Efectos de la declaración de guerra o conflicto armado</p>
                        <p><strong>Módulo 4:</strong> Métodos y medios de combate.</p>
                        <p>Normas fundamentales</p>
                        <p><strong>Módulo 5:</strong> Estatuto del combatiente.</p>
                        <p>Fuerzas Armadas</p>
                        <p>Combatientes y prisioneros de guerra</p>
                        <p>Espías y mercenarios</p>
                        <p><strong>Módulo 6:</strong> Heridos, enfermos, náufragos y desaparecidos.</p>
                        <p>Introducción. Terminología</p>
                        <p>Protección. Prohibiciones</p>
                        <p>Búsqueda de muertos, heridos, enfermos, náufragos y desaparecidos</p>
                        <p>Entrega de heridos, enfermos o náufragos a un beligerante</p>
                        <p>Heridos caídos en poder del adversario</p>
                        <p>Personal sanitario y unidades sanitarias.</p>
                        <p>Definición</p>
                        <p>Protección del personal sanitario y de unidades sanitarias</p>
                        <p>Personal religioso</p>
                        <p>Material de las unidades sanitarias. Requisa. Limitaciones</p>
                        <p>Cometido de la población civil y de las sociedades de socorro</p>
                        <p><strong>Módulo 7:</strong> Prisioneros de guerra. Normas generales.</p>
                        <p>Prisioneros de guerra. Definición</p>
                        <p>Generalidades. Ámbito de aplicación personal</p>
                        <p>Principio legal del “beneficio de la duda”. Garantías fundamentales.</p>
                        <p>Casos especiales</p>
                        <p>Personas excluidas</p>
                        <p>Ámbito de aplicación temporal</p>
                        <p>Derechos inalienables</p>
                        <p><strong>Módulo 8:</strong> Protección general de los prisioneros de guerra.</p>
                        <p>Principio general</p>
                        <p>Derechos y deberes</p>
                        <p>Interrogatorio del prisionero</p>
                        <p>Libertad bajo palabra o compromiso</p>
                        <p>Protección y trato a dispensar a los prisioneros de guerra</p>
                        <p>Correspondencia</p>
                        <p><strong>Módulo 9:</strong> Régimen disciplinario.</p>
                        <p>Generalidades</p>
                        <p>Evasión. Tentativa y consumación</p>
                        <p>Representantes de los prisioneros de guerra</p>
                        <p>Derecho de petición. Derecho de queja</p>
                        <p><strong>Módulo 10:</strong> Sanciones penales y disciplinarias.</p>
                        <p>Legislación aplicable</p>
                        <p>Indulgencia. Principio del “non bis in ídem”. Penas</p>
                        <p>Prohibiciones</p>
                        <p>Carácter de las penas disciplinarias. Enumeración</p>
                        <p>Beneficio</p>
                        <p>Pena de muerte</p>
                        <p>Procedimiento judicial. Garantías</p>
                        <p><strong>Módulo 11:</strong> Finalización del cautiverio.</p>
                        <p>Entrega y hospitalización</p>
                        <p>Liberación al final de las hostilidades</p>
                        <p>Fallecimiento</p>
                        <p><strong>Módulo 12:</strong> Restricciones para el empleo de armas convencionales que puedan considerarse excesivamente nocivas</p>
                        <p>Minas antipersonal</p>
                        <p>Prohibición del empleo de determinadas armas</p>
                        <p>Destrucción de minas antipersonal colocadas en las zonas minadas</p>
                        <p>Protección a personas civiles y bienes de carácter civil</p>
                        <p><strong>Módulo 13:</strong> Enseñanza y difusión del DICA</p>
                    `;
                    break;
                case 'unit4':
                    content = `
                        <h2>Unidad 4</h2>
                        <h3>Represión de las infracciones</h3>
                        <p><strong>Módulo 1:</strong> Introducción.</p>
                        <p>Finalidad. Alcances</p>
                        <p><strong>Módulo 2:</strong> Crímenes de guerra.</p>
                        <p>Enunciación</p>
                        <p><strong>Módulo 3:</strong> Crímenes de genocidio.</p>
                        <p>Definición. Enunciación</p>
                        <p><strong>Módulo 4:</strong> Crímenes contra la humanidad.</p>
                        <p>Definición. Enunciación</p>
                        <p><strong>Módulo 5:</strong> Crimen de agresión.</p>
                        <p>Concepto</p>
                        <p><strong>Módulo 6:</strong> Corte Penal Internacional de carácter permanente.</p>
                        <p>Estatuto de Roma 1998</p>
                        <p>Competencia</p>
                        <p>Procesados</p>
                        <p>Responsables penalmente</p>
                        <p>Prescripción</p>
                        <p>Presunción de inocencia</p>
                        <p>Penas</p>
                        <p>Apelación</p>
                        <p>Revisión de condena</p>
                        <p>Cooperación de los Estados Parte</p>
                        <p>Cumplimiento de la pena</p>
                        <p>Evasión</p>
                        <p>Reservas</p>
                        <p>Ratificación</p>
                    `;
                    break;
                    case 'unit5':
                        content = `
                            <h2>Unidad 5</h2>
                            <h3>Sistema de protección</h3>
                            <p><strong>Módulo 1:</strong> Protección de personas y bienes civiles.</p>
                            <p>Principios generales</p>
                            <p>Protección de las personas o bienes civiles</p>
                            <p>Protección especial de ciertas zonas y localidades</p>
                            <p>Localidades no defendidas y zonas desmilitarizadas</p>
                            <p>Medidas de precaución</p>
                            <p>Protección civil</p>
                            <p>Cesación de la protección de los organismos de protección civil</p>
                            <p><strong>Módulo 2:</strong> Protección general y régimen para las personas civiles en tiempo de guerra.</p>
                            <p>Personas protegidas</p>
                            <p>Actividades de socorro</p>
                            <p>Medidas en favor de la infancia.</p>
                            <p>Protección de las mujeres</p>
                            <p>Reunión de familias dispersas y noticias familiares</p>
                            <p>Garantías fundamentales</p>
                            <p><strong>Módulo 3:</strong> Trato a dispensar a las personas protegidas.</p>
                            <p>Disposiciones comunes a los territorios de las partes contendientes y a los territorios ocupados.</p>
                            <p>Respeto de la persona humana</p>
                            <p>Recursos a las Potencias Protectoras y a los Organismos de Socorro</p>
                            <p>Prohibiciones</p>
                            <p>Extranjeros residentes en el territorio de una parte contendiente</p>
                            <p>Derogación de medidas restrictivas</p>
                            <p>Norma general, refugiados y apátridas</p>
                            <p>Religión</p>
                            <p>Otros derechos</p>
                            <p><strong>Módulo 4:</strong> Reglas relativas al tratamiento de los internados.</p>
                            <p>Principio general. Carácter y régimen del internamiento</p>
                            <p>Sanciones penales y disciplinarias</p>
                            <p>Remisión</p>
                            <p>Evasión, traslado y fallecimiento; liberación, repatriación y hospitalización de internados</p>
                            <p><strong>Módulo 5:</strong> Bienes de carácter civil.</p>
                            <p>Definición</p>
                            <p><strong>Módulo 6:</strong> Territorios ocupados. Conceptos básicos.</p>
                            <p>Territorio ocupado</p>
                            <p><strong>Módulo 7:</strong> Identificación (Anexo I).</p>
                            <p>Identificación</p>
                        `;
                        break;
                        case 'annex':
                            content = `
                                <h2>Anexos</h2>
                                <h3>Anexo 1</h3>
                                <p>Instrumentos internacionales</p>
                                <p>Convenciones Internacionales ordenadas cronológicamente</p>
                                <h3>Anexo 2</h3>
                                <p>Manual de educación conjunto MEC 6-27.2 - 2024</p>
                                <p>Derechos Humanos y Derecho Internacional Humanitario para las Fuerzas Militares Públicas</p>
                                <h3>Anexo 3</h3>
                                <p>Sitios de Internet pertenecientes a organismos internacionales</p>
                                <p>Direcciones electrónicas</p>
                                <h3>Anexo 4</h3>
                                <p>Decreto 2840 de 2013.</p>
                                <p>Procedimiento para el Reconocimiento de la Condición de Refugiado.</p>
                                <h3>Anexo 5</h3>
                                <p>Ministerio de Defensa Nacional 2018</p>
                                <p>Política pública sectorial de transversalización del enfoque de género para el personal uniformado de la fuerza pública 2018 – 2027.</p>
                            `;
                            break;
            default:
                content = 'Contenido no disponible';
                break;
        }
        contentContainer.innerHTML = content;
    }

    document.getElementById('menu-select').addEventListener('change', (e) => {
        const value = e.target.value;
        let content = '';
        switch (value) {
            case 'prologue':
                content = 'Contenido del Prólogo';
                break;
            case 'introduction':
                content = 'Contenido de la Introducción';
                break;
            case 'objectives':
                content = 'Contenido de los Objetivos';
                break;
            case 'scope':
                content = 'Contenido del Alcance';
                break;
            default:
                content = 'Selecciona una opción';
                break;
        }
        contentContainer.innerHTML = `<p>${content}</p>`;
    });
});
