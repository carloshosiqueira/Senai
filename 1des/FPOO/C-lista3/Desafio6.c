#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 6\n\n");
	int n,continuar, i;
	
	do{
		
		printf("Escreva um número inteiro maior que 0: ");
		scanf("%d",&n);
		
		while(n <= 0){
		printf("Digite um número inteiro MAIOR que 0:");
		scanf("%d",&n);
	}

		for(i = 0; i <= n; i++){
			if(i % 2 == 1) printf("%d\n",i);
		}
		
		printf("Escreva 1 para continuar ou 0 para sair: ");
		scanf("%d",&continuar);
	}while(continuar == 1);
	return 0;
}
