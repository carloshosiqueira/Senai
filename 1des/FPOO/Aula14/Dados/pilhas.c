#include<stdio.h>
#include<locale.h>
#define SIZE 6
	int pilha[SIZE];
	int ponteiro = 0;
	int i;
	
void mostrapilha(){
	printf("Pilha:\n");
	
	for(i = 0; i < ponteiro; i++)
		printf("%d\n",pilha[i]);
	
}	
	
int push(int dado){
	
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
	ponteiro++;
	return 1;
	} 
	else return 0;	
}

int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}
	else return 0;
}
	
int main(){
	setlocale(LC_ALL,"");
	
	push(25);
	mostrapilha();
	push(18);
	mostrapilha();
	push(10);
	mostrapilha();
	pop();
	mostrapilha();
	pop();
	mostrapilha();
	
	
	return 0;
}
