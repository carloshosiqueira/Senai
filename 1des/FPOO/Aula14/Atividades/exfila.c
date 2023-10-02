#include<stdio.h>
#include<locale.h>
#define SIZE 10
	int fila[SIZE];
	int ponteiro = 0;
	int i, continuar, decidir;
	int dado;
	
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
	
	do{
		printf("Deseja adicionar ou remover algo da fila? 1. Adicionar 2. Remover: ");
		scanf("%d",&decidir);
		if(decidir == 1){
			printf("Escreva o número que deseja inserir na fila: ");
			scanf("%d",&dado);
			push(dado);
			mostrafila();
		}
		if(decidir == 2){
			pop();
			mostrafila();
		}
		if(decidir > 2 || decidir <= 0){
			printf("Por favor, insira o número corretamente\n");
		}
		
		printf("\nDeseja fazer mais alterações? 1.Sim 2.Não: ");
		scanf("%d",&continuar);
		printf("\n");
	}while(continuar == 1);
	
	return 0;
}
