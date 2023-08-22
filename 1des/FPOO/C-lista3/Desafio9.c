#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 9\n\n");
	int n, i;
	printf("Escreva número 10 números: ");
	scanf("%d",&n);
	for(i = 1; i < 10; i++){
		scanf("%d",&n);
	}
		
	return 0;
}
