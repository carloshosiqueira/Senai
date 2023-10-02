#include<stdio.h>
#include<locale.h>
#define SIZE 6
	int pilha[SIZE];
	int ponteiro = 0;
	int i, continuar, decidir;
	int dado;
	
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
	
	do{
		printf("Deseja adicionar ou remover algo da pilha? 1. Adicionar 2. Remover: ");
		scanf("%d",&decidir);
		if(decidir == 1){
			printf("Escreva o número que deseja inserir na pilha: ");
			scanf("%d",&dado);
			push(dado);
			mostrapilha();
		}
		if(decidir == 2){
			pop();
			mostrapilha();
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
