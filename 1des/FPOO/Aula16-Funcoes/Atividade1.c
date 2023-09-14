#include <stdio.h>
#include <locale.h>
//Procedimento que mostra todos os elementos de um vetor
void mostrar(int vetor[], int n){
	int i;
	printf("Índice\tConteúdo\n");
	for(i = 0; i < n; i++)
		printf("%d\t[%003d]\n", i, vetor[i]);	
}
//Procedimento de busca
int buscar(int *vetor, int n, int valor){
	int i, posicao = -1;
	for(i = 0; i < n; i++){
		if(valor == vetor[i]){
			posicao = i;
			break;
		}
	}
	return posicao;
}

void ordenacao(int *vetor, int n){

	int i, j, temp;
	
	for(i = 0; i < n; i++){
		for(j = 0; j < n; j++){
			if(vetor[j] > vetor[j + 1]){
				vetor[j] = temp;
				vetor [j] = vetor[j + 1];
				vetor[j + 1] = temp;
			}
		}
	}
}

int main(){
	setlocale(LC_ALL,"");
	int range[] = { 16, 15, 24, 32, 10, 9, 84};
	int n = sizeof(range) / sizeof(range[0]);
	int i;
	mostrar(range, n);
	int valor;
	printf("Digite o valor a ser buscado: ");
	scanf("%d", &valor);
	int resultado = buscar(range, n, valor);
	if(resultado == -1)
		printf("Valor não encontrado\n");
	else
		printf("O valor foi encontrado na posição %d\n", resultado);
		
	ordenacao(range, n);
	for(i = 0; i < n; i++)
		printf("%d\n",range[i]);
	return 0;
}

