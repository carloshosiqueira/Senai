#include<stdio.h>
#include<locale.h>
#include<string.h>
int main(){
	setlocale(LC_ALL,"");
	char nome[5][30], continuar[3];
	float salario[5], reajuste;
	int i;
	
	printf("Qual a porcentagem de reajuste? ");
	scanf("%f",&reajuste);
	
	do{
	
		for(i = 0; i < 5; i++){
			printf("Qual o nome do %dº funcionário? ", i + 1);
			scanf("%s",&nome[i]);
		}
		for(i = 0; i < 5; i++){
			printf("Qual o salário de %s em reais? ",nome[i]);
			scanf("%f",&salario[i]);
			salario[i] = salario[i] + (salario[i] * reajuste / 100);
			printf("O novo salário de %s é de R$%.2f\n\n",nome[i], salario[i]);
		}
		printf("Deseja continuar usando o programa? Digite (sim) para continuar ou não para sair: ");
		scanf("%s",&continuar);
		
	}while(!strcmp(continuar ,"sim"));
	return 0;
}
