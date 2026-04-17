# Performance Analysis Report – Test con 20 usuarios

## Objetivo

Evaluar el comportamiento del sistema bajo una carga moderada de 20 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 20
* Tiempo promedio (average): 204 ms
* Tiempo mínimo (min): 22 ms
* Tiempo máximo (max): 569 ms
* Mediana (median): 165 ms
* Percentil 90 (P90): 423 ms
* Percentil 95 (P95): 512 ms
* Percentil 99 (P99): 569 ms
* Tasa de error: 0 %
* Throughput: 1.7 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 204 ms se encuentra dentro de un rango aceptable, indicando que el sistema 
responde de forma relativamente rápida bajo esta carga.

La mediana (165 ms) es menor al promedio, lo que indica que la mayoría de las solicitudes tienen tiempos de respuesta bajos, pero existen 
algunas más lentas que elevan el promedio.

El tiempo máximo de 569 ms no es crítico, pero muestra que en ciertos casos el 
sistema puede presentar demoras.

---

### Percentiles

* P90: 423 ms
* P95: 512 ms
* P99: 569 ms

Estos valores indican que:

* el 90 % de las solicitudes se resuelven en menos de 423 ms
* el 95 % en menos de 512 ms
* el 99 % en menos de 569 ms

Esto muestra una leve variabilidad en los tiempos de respuesta, aunque sin 
valores extremos preocupantes.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* el sistema responde correctamente a todas las solicitudes
* no se detectan fallos bajo esta carga

Esto es un indicador positivo de estabilidad.

---

### Throughput

El throughput de 1.7 requests por segundo es bajo, lo que puede deberse a:

* limitaciones del sistema bajo prueba
* configuración del test
* naturaleza del flujo (posibles tiempos de espera entre requests)

---

## Análisis general

El sistema presenta un comportamiento estable bajo una carga de 20 usuarios concurrentes.

Se observa:

* tiempos de respuesta aceptables
* ausencia de errores
* leve variabilidad en tiempos altos (percentiles)

No se evidencian problemas críticos en este nivel de carga.

---

## Conclusión

El sistema soporta correctamente una carga de 20 usuarios concurrentes, 
manteniendo tiempos de respuesta dentro de rangos aceptables y sin errores.

Sin embargo, la diferencia entre la mediana y los percentiles más altos sugiere que, 
a medida que aumente la carga, podrían aparecer problemas de rendimiento.

Se recomienda realizar pruebas con mayor concurrencia para evaluar la escalabilidad 
del sistema.
