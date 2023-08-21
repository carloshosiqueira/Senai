#include <stdio.h>
int main(){
	int velocidade = 900;
	float distancia;
	printf("Insira a distancia: ");
	scanf("%f",&distancia);
	float horas = distancia / velocidade;
	printf("O tempo necessario sera de %.2f hora(s)",horas);	
}
