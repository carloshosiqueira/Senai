#include<stdio.h>
#include<locale.h>
#define SIZE 10
	int fila[SIZE];
	int ponteiro = 0;
	int i;
	
void mostrafila(){
	printf("Fila:\n");
	
	for(i = 0; i < ponteiro; i++)
		printf("%d ",fila[i]);

printf("\n");
	
}		
int push(int dado){
	
	if(ponteiro < SIZE){
		fila[ponteiro] = dado;
	ponteiro++;
	return 1;
	} 
	else return 0;	
}

int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		for(i = 0; i < ponteiro; i++){
			fila[i] = fila[i + 1];
		}	
		return 1;
	}
	else return 0;
}
	
int main(){
	setlocale(LC_ALL,"");
	
	push(25);
	mostrafila();
	push(18);
	mostrafila();
	push(10);
	mostrafila();
	pop();
	mostrafila();
	pop();
	mostrafila();
	
	
	return 0;
}
