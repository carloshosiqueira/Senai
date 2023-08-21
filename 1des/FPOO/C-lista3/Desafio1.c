#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	int i;
	printf("Exercicio 1\n\n");
	for(i = 10; i <= 200;i++)
		printf("%d\n",i);
	return 0;
}
