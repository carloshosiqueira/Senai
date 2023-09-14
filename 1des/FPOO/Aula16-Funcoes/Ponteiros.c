#include<stdio.h>
int main(){
	//Vetor com 3 valores
	int x[3]; //declara��o
	x[0] = 7;//atribui��o
	x[1] = 3;//atribui��o
	x[2] = 2;//atribui��o
	printf("%d %d %d\n",x[0], x[1], x[2]);
	
	//Vetor com 5 elementos declarando e atribuindo
	int y[] = {7, 3, 2, 0, 8};
	printf("%d %d %d %d %d\n",y[0], y[1] , y[2] , y[3] , y[4]);
	
	//Queremos um 3� Vetor "p" igual ao vetor y
	int *p = y;
	
	printf("%d %d %d %d %d\n", p[0], p[1] , p[2] , p[3] , p[4]);
	
	//O ponteiro "p" n�o possui 5 elementos, ele apenas aponta para o vetor "y"
	y[2] = 100; //Alteramos o terceiro elemento do vetor "y" para 100
	printf("%d %d %d %d %d\n", p[0], p[1] , p[2] , p[3] , p[4]);
	//N�o modificaos o ponteiro "p",por�m como ele aponta para "y"
	//En~tao ele tamb�m aparece modificado
	return 0;
}
