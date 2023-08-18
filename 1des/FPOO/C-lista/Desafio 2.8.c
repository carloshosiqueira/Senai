#include <stdio.h>
int main(){
	float raio, altura;
	float area, volume;
	float pi = 3.14;
	//Entrada
	printf("Insira o raio do cilindro: ");
	scanf("%f",&raio);
	printf("Insira a altura do cilindro: ");
	scanf("%f",&altura);
	//Processamento
	float alat = 2 * pi * (raio * altura);
	float abases = 2 * pi * (raio * raio);
	area = alat + abases; 
	volume = pi * raio * raio * altura;
	//Saidas
	printf("Raio = %.2f\n",raio);
	printf("Altura = %.2f\n",altura);
	printf("A area do do cilindro e de %.3f\n",area);
	printf("O volume do cilindro e de %.3f\n",volume);
	return 0;
}
