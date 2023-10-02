#include <stdio.h>
#include <stdlib.h>
#include <locale.h>
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
	
	int decidir, continuar, dado, index;
   
    do{
		printf("Deseja adicionar ou remover algo da lista? 1. Adicionar 2. Remover: ");
		scanf("%d",&decidir);
		if(decidir == 1){
			printf("Escreva o número que deseja inserir na lista: ");
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
			printf("Por favor, insira o número corretamente\n");
		}
		
		
		
		printf("\nDeseja fazer mais alterações? 1.Sim 2.Não: ");
		scanf("%d",&continuar);
		printf("\n");
		
	}while(continuar == 1);
    
}
