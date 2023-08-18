#include <stdio.h>
int main(){
	int caminhoes;
	float alqueires;
	printf("Insira a quantidade de alqueires: ");
	scanf("%f",&alqueires);
	printf("Insira a quantidade de caminhoes: ");
	scanf("%d",&caminhoes);
	float viagens = (alqueires*250) / (caminhoes*18);
	printf("A quantidade necessaria de viagens e de %.2f:",viagens);
}
