import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'plantilla';
  items: any = [
    {
      title: 'ADMINISTRACIÓN DE CONDOMINIOS',
      texto:
        'Le ofrecemos un sistema Gerencial Administrativo y de Control, el cual contempla tanto la administración integral del condominio como de sus áreas comunes, incluyendo reportes oportunos y adecuados que permiten conocer en todo momento la situación financiera-operativa de los bienes administrados.',
      icono: 'fa-solid fa-house',
    },
    {
      title: 'GESTIÓN ADMINISTRATIVA CONFIABLE Y EFICIENTE',
      texto:
        'Entre los principales beneficios le ofrecemos los precios más competitivos y estables del mercado, atención inmediata y eficaz a todas las situaciones de servicio de los edificios, optima supervisión en el mantenimiento, oportuno seguimiento a los pagos mensuales y cancelación detallada de los gastos autorizados, disponiblidad de personal y asesores externos altamente calificados y con amplia trayectoria en el área, así como, las instalaciones y equipos requeridos especialmente configurados para la darle un excelente servicio. Somos especialistas.',
      icono: 'fa-solid fa-check-to-slot',
    },
    {
      title: 'AUDITORIAS A CONDOMINIOS',
      texto:
        'Auditamos su administrador actual y le damos y asesoría con respecto a las fortalezas y oportunidades de mejora encontradas.Para su traquilidad...al renovar su Junta de Condominio',
      icono: 'fa-solid fa-table-list',
    },
    {
      title: 'OTROS SERVICIOS',
      texto:
        'Venta y Alquiler de inmuebles, avalúos y asesorías con respecto a la Ley de Propiedad Horizontal, derechos y deberes. Asi mismo Ud. cuenta con nuestro servicio de atención personalizada que se ajusta a sus necesidades. Seguridad y experiencia...el apoyo que Ud. requiere',
      icono: 'fa-solid fa-plus',
    },
  ];
}
