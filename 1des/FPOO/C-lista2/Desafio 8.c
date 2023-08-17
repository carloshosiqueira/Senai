#include <stdio.h>
int main(){
	float valor1, valor2;
	printf("Qual o valor de X? ");
	scanf("%f",&valor1);
	printf("Qual o valor de Y? ");
	scanf("%f",&valor2);
	if(valor1 < valor2)
		printf("%.2f e maior que %.2f",valor2, valor1);
	else if (valor1 > valor2) printf("%.2f e maior que %.2f",valor1, valor2);
	else printf("Sao iguais");
}
