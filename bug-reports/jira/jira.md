# Bug Tracking Board (Jira Simulation)

## Estado: Por hacer

### BUG-001 - No verifica correctamente las credenciales en el login

* Módulo: Login
* Severidad: Alta
* Prioridad: Alta

Descripción:
El sistema permite ingresar con credenciales incorrectas sin mostrar error.

---

### BUG-002 - No valida tipo de archivo en certificado de salud

* Módulo: Checkout
* Severidad: Media
* Prioridad: Media

Descripción:
Permite subir archivos con cualquier extensión sin validación.

---

### BUG-003 - No valida cupones de descuento

* Módulo: Checkout
* Severidad: Alta
* Prioridad: Alta

Descripción:
Acepta cupones inválidos sin mostrar error.

---

## Estado: En curso

### BUG-004 - No permite completar el pago

* Módulo: Checkout
* Severidad: Alta
* Prioridad: Alta

Descripción:
El flujo de pago no se completa correctamente aun con datos válidos.

---

## Estado: Bloqueado

### BUG-006 - Login no cambia la experiencia del usuario

* Módulo: Login
* Severidad: Media
* Prioridad: Media

Descripción:
No hay diferencias entre usuario logueado y usuario no autenticado.

Bloqueo:
No se puede validar comportamiento esperado por falta de funcionalidades diferenciadas.

---

## Estado: Listo

### BUG-005 - Enlaces del footer no redirigen

* Módulo: Checkout
* Severidad: Baja
* Prioridad: Baja

Descripción:
Los enlaces a redes sociales no redirigen correctamente.

Resolución:
Bug corregido y validado.

---

## Notas

* Los bugs fueron priorizados según impacto en funcionalidad y experiencia de usuario.
* Se incluye evidencia visual en la carpeta correspondiente dentro del proyecto.
* El flujo simula un tablero real de seguimiento tipo Jira.
