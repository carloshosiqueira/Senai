#include <stdio.h>
int main(){
	float velocidade;
	float distancia;
	printf("Digite a velocidade em km/h: ");
	scanf("%d",&velocidade);
	printf("Digite a distancia: ");
	scanf("%d",&distancia);
	float tempo = distancia / velocidade;
	printf("O tempo gasto e de %.2f hora(s)",tempo);
}
