#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 9\n\n");
	int n, r, continuar, i;
	
	do{
		
	printf("Escreva o número que deseja ver a tabuada até o 10: ");
	scanf("%d",&n);
	for(i = 1; i <= 10; i++){
		r = n * i;
		printf("%d * %d = %d\n", n, i, r);
	}
	
		printf("Digite 1 para continuar e 0 para sair: ");
		scanf("%d",&continuar);
		
	}while(continuar == 1);
	return 0;
}
