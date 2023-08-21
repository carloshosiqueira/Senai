#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	printf("Exercicio 2\n\n");
	int i;
	for(i = 200; i >=10; i--)
	printf("%d\n",i);
	return 0;
}
