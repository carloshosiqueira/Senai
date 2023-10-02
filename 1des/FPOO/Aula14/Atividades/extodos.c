#include<stdio.h>
#include <stdlib.h>
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
int pushfila(int dado){
	
	if(ponteiro < SIZE){
		fila[ponteiro] = dado;
	ponteiro++;
	return 1;
	} 
	else return 0;	
}

int popfila(){
	if(ponteiro >= 0){
		ponteiro--;
		for(i = 0; i < ponteiro; i++){
			fila[i] = fila[i + 1];
		}	
		return 1;
	}
	else return 0;
}
int pilha[SIZE];
	int i, continuar, decidir;
	int dado;
	
void mostrapilha(){
	printf("Pilha:\n");
	
	for(i = 0; i < ponteiro; i++)
		printf("%d\n",pilha[i]);
	
}	
	
int pushpilha(int dado){
	
	if(ponteiro < SIZE){
		pilha[ponteiro] = dado;
	ponteiro++;
	return 1;
	} 
	else return 0;	
}

int poppilha(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}
	else return 0;
}
struct Lista{
    int dado;
    struct Lista *prox;
};
struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;
void mostraLista(){
    aux = inicio;
    printf("Lista:\n");
    while(aux != NULL){
        printf("%d\n", aux->dado);
        aux = aux->prox;
    }
}
int push(int dado){
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    if(aux == NULL) return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if(inicio == NULL){
        inicio = aux;
        fim = aux;
    }else{
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}

int pop(){
    if(inicio != NULL){
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else
        return 0;
}

int slice(int index){
    int i;
    aux = inicio;
    if(index == 0){
        inicio = inicio->prox;
        free(aux);
        return 1;
    }else{
        for(i = 0; i < index-1; i++){
            aux = aux->prox;
        }
        struct Lista *aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

int main(){
	setlocale(LC_ALL,"");
	
	int continuar, dado, decidir, opcao, index;
	
	printf("De qual forma deseja mexer? 1.Pilha 2.Fila 3.Lista: ");
	scanf("%d",&opcao);
	if(opcao == 1){
		do{
			printf("Deseja adicionar ou remover algo da pilha? 1. Adicionar 2. Remover: ");
			scanf("%d",&decidir);
			if(decidir == 1){
				printf("Escreva o n�mero que deseja inserir na pilha: ");
				scanf("%d",&dado);
				pushpilha(dado);
				mostrapilha();
			}
			if(decidir == 2){
				poppilha();
				mostrapilha();
		}
			if(decidir > 2 || decidir <= 0){
				printf("Por favor, insira o n�mero corretamente\n");
		}
		
		
			printf("\nDeseja fazer mais altera��es? 1.Sim 2.N�o: ");
			scanf("%d",&continuar);
			printf("\n");
			
		}while(continuar == 1);
	}
	if(opcao == 2){
		do{
			printf("Deseja adicionar ou remover algo da fila? 1. Adicionar 2. Remover: ");
			scanf("%d",&decidir);
			if(decidir == 1){
				printf("Escreva o n�mero que deseja inserir na fila: ");
				scanf("%d",&dado);
				pushfila(dado);
				mostrafila();
		}
			if(decidir == 2){
				popfila();
				mostrafila();
		}
			if(decidir > 2 || decidir <= 0){
				printf("Por favor, insira o n�mero corretamente\n");
		}
		
			printf("\nDeseja fazer mais altera��es? 1.Sim 2.N�o: ");
			scanf("%d",&continuar);
			printf("\n");
		}while(continuar == 1);
	}
	
	if(opcao == 3){
		do{
			printf("Deseja adicionar ou remover algo da lista? 1. Adicionar 2. Remover: ");
			scanf("%d",&decidir);
			if(decidir == 1){
				printf("Escreva o n�mero que deseja inserir na lista: ");
				scanf("%d",&dado);
				push(dado);
				mostraLista();
		}
			if(decidir == 2){
				printf("Qual parte da lista deseja remover? ");
				scanf("%d",&index);
				slice(index);
				mostraLista();
		}
			if(decidir > 2 || decidir <= 0){
				printf("Por favor, insira o n�mero corretamente\n");
		}
		
			printf("\nDeseja fazer mais altera��es? 1.Sim 2.N�o: ");
			scanf("%d",&continuar);
			printf("\n");
		
		}while(continuar == 1);
	}
	
	if(opcao <=0 || opcao > 3){
		printf("Por favor, escolha uma das op��es");
	}
}
