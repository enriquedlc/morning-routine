# morning-routine

Como soy una persona olvidadiza, necesito un método que me ayude a recordar mi rutina matutina. Por eso he creado un programa que, según la hora del día, me dirá lo que tengo que hacer:


De 06:00 a 06:59 - Hacer ejercicio
De 07:00 a 07:59 - Leer y estudiar
De 08:00 a 08:59 - Desayunar

Introducción

Este kata se puede hacer con dos enfoques:

Desde cero
Refactorizando la implementación proporcionada
Enfoque desde cero

Historia: Recordatorio de la rutina matutina

Historia de usuario:

Como soy una persona olvidadiza,
quiero un programa que me recuerde mi rutina matutina,
para que pueda seguir con mis actividades.

Escenario 1: Mostrar "Hacer ejercicio" entre las 06:00 y las 06:59

Dado que la hora actual es entre las 06:00 y las 06:59
Cuando solicito la actividad a realizar
El sistema debería mostrar "Hacer ejercicio"

Escenario 2: Mostrar "Leer y estudiar" entre las 07:00 y las 07:59

Dado que la hora actual es entre las 07:00 y las 07:59
Cuando solicito la actividad a realizar
El sistema debería mostrar "Leer y estudiar"

Escenario 3: Mostrar "Desayunar" entre las 08:00 y las 08:59

Dado que la hora actual es entre las 08:00 y las 08:59
Cuando solicito la actividad a realizar
El sistema debería mostrar "Desayunar"

Escenario 4: Mostrar "Sin actividad" fuera del intervalo de tiempo definido


Dado que la hora actual es antes de las 05:59 o después de las 09:00
Cuando solicito la actividad a realizar
El sistema debería mostrar "Sin actividad"
Iteración 2 - Tiempo más preciso

Ahora me gustaría poder añadir cosas por hacer que lleven menos de una hora, así como actualizar la lista de cosas por hacer, por ejemplo:


De 06:00 a 06:59 - Hacer ejercicio
De 07:00 a 07:29 - Leer
De 07:30 a 07:59 - Estudiar
De 08:00 a 08:59 - Desayunar
De 06:00 a 06:44 - Hacer ejercicio
De 06:45 a 06:59 - Ducharse
De 07:00 a 07:29 - Leer
De 07:30 a 07:59 - Estudiar
De 08:00 a 09:00 - Desayunar

Interfaz que se puede utilizar

interface MorningRoutine {
    String whatShouldIDoNow();
}


interface MorningRoutine {
    void whatShouldIDoNow();
}


Enfoque de refactorización

Implementación de Smelly para la iteración 1 en Java

```java
interface MorningRoutine {
    void whatShouldIDoNow();
}

public class MyMorningRouting implements MorningRoutine {
    public void whatShouldIDoNow() {
        LocalDateTime now = LocalDateTime.now();
        int currentHour = now.getHour();
        if (currentHour == 6) {
            System.out.println("Do exercise");
        } else if (currentHour == 7) {
            System.out.println("Read and study");
        } else if (currentHour == 8) {
            System.out.println("Have breakfast");
        } else {
            System.out.println("No activity");
        }
    }
}
```

Para reflexionar...

- ¿Funcionaría tu programa en otra zona horaria?
- ¿Es fácil añadir nuevas actividades al calendario existente con tu diseño actual?
- ¿Tu aplicación te permite añadir actividades más largas o más cortas?