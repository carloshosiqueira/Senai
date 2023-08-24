#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, continuar, maior;

	do{

	printf("Insira os 10 numeros inteiros:\n");
	scanf("%d %d %d %d %d %d %d %d %d %d",&num1, &num2, &num3, &num4, &num5, &num6, &num7, &num8, &num9, &num10);
	
	maior = 0;
	
	if(num1 > maior)
		maior = num1;

	if(num2 > maior)
		maior = num2;

	if(num3 > maior)
		maior = num3;
	
	if(num4 > maior)
		maior = num4;
	
	if(num5 > maior)
		maior = num5;
	
	if(num6 > maior)
		maior = num6;
		
	if(num7 > maior)
		maior = num7;
	
	if(num8 > maior)
		maior = num8;
	
	if(num9 > maior)
		maior = num9;
	
	if(num10 > maior)
		maior = num10;
		
	printf("O maior número digitado até agora foi %d\n\n",maior);
		
	printf("Digite 1 para continuar usando o programa ou 0 para sair");
	scanf("%d",&continuar);
	
}while(continuar == 1);
	
	return 0;
}
