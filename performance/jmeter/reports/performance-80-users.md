# Performance Analysis Report – Test con 80 usuarios

## Objetivo

Evaluar el comportamiento del sistema bajo una carga de 80 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y eficiencia en el procesamiento de solicitudes.

---

## Métricas obtenidas

* Usuarios concurrentes: 80
* Tiempo promedio (average): 161 ms
* Tiempo mínimo (min): 19 ms
* Tiempo máximo (max): 1185 ms
* Mediana (median): 120 ms
* Percentil 90 (P90): 331 ms
* Percentil 95 (P95): 451 ms
* Percentil 99 (P99): 637 ms
* Tasa de error: 0 %
* Throughput: 2.6 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 161 ms representa una mejora respecto a pruebas anteriores, incluso con mayor cantidad de usuarios concurrentes.

La mediana (120 ms) confirma que la mayoría de las solicitudes se resuelven rápidamente.

El tiempo máximo de 1185 ms indica la presencia de algunos casos más lentos, pero sin alcanzar valores extremos como en pruebas previas.

---

### Percentiles

* P90: 331 ms
* P95: 451 ms
* P99: 637 ms

Los percentiles muestran un comportamiento más consistente:

* el 90 % de las solicitudes se mantienen en tiempos bajos
* el 95 % se encuentra dentro de rangos aceptables
* el 99 % no presenta picos extremos

Esto indica una mejor distribución de los tiempos de respuesta.

---

### Estabilidad

La tasa de error se mantiene en 0 %, lo que indica:

* correcta respuesta del sistema
* ausencia de fallos bajo esta carga

---

### Throughput

El throughput de 2.6 requests por segundo representa una mejora significativa respecto
 a pruebas anteriores.

Esto sugiere que el sistema logra procesar más solicitudes de forma eficiente.

---

## Análisis general

El sistema muestra un comportamiento sólido bajo una carga de 80 usuarios concurrentes.

Se observa:

* mejora en tiempos promedio y medianos
* reducción de la variabilidad en percentiles altos
* incremento en la capacidad de procesamiento

Este resultado podría indicar una mejor utilización de recursos o condiciones más 
favorables durante la ejecución del test.

---

## Conclusión

El sistema soporta de manera eficiente una carga de 80 usuarios concurrentes, mostrando 
mejoras en rendimiento y estabilidad respecto a cargas menores.

Los tiempos de respuesta son consistentes y el throughput aumenta, lo que sugiere una 
buena capacidad de procesamiento en este escenario.

Se recomienda repetir las pruebas para validar la consistencia de estos resultados y analizar el comportamiento en distintos escenarios de carga para confirmar 
la escalabilidad del sistema.
