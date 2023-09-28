//#include<stdio.h>
//#include<locale.h>
//int quantidade, i, j, esquerda, direita;
//
//int main(){
//	setlocale(LC_ALL,"");
//	
//	printf("Quantos comandos foram dados? ");
//	scanf("%d",&quantidade);
//	
//	int direcao[quantidade][1];
//	
//	printf("Quais foram as dire��es? E (esquerda) ou D(Direita): ");
//	for(i = 0; i < quantidade; i++){
//		scanf("%s",&direcao);
//		if(direcao == E || direcao == e){
//			esquerda += 
//		}
//	}
//	
//	
//	return 0;
//	
//}
#include <stdio.h>

// Fun��o para calcular a dire��o final
char calcularDirecaoInicial(char comandos[], int N) {
    // Inicialmente, o recruta tem a face voltada para o norte
    char direcaoAtual = 'N';
    int i;

    for (i = 0; i < N; i++) {
        if (comandos[i] == 'E') {
            // Girar 90 graus � esquerda
            // Substitua o c�digo abaixo para atualizar a dire��o atual
            // Use switch ou if-else para atualizar direcaoAtual
            
                if(direcaoAtual == 'N')
                	direcaoAtual = 'O';
                else if(direcaoAtual == 'L')
                	direcaoAtual = 'N';
                else if(direcaoAtual == 'S')
                	direcaoAtual = 'L';
                else if(direcaoAtual == 'O')
                	direcaoAtual = 'S';  
            }
		if(comandos[i] == 'D'){
            // Girar 90 graus � direita
            // Substitua o c�digo abaixo para atualizar a dire��o atual
            // Use switch ou if-else para atualizar direcaoAtual
            	 if(direcaoAtual == 'N')
                	direcaoAtual = 'L';
                else if(direcaoAtual == 'L')
                	direcaoAtual = 'S';
                else if(direcaoAtual == 'S')
                	direcaoAtual = 'O';
                else if(direcaoAtual == 'O')
                	direcaoAtual = 'N';  
       	}
    }

    return direcaoAtual;
}

int main() {
    int N;
    char comandos[1001];

    // Abra o arquivo de entrada
    FILE *entrada = fopen("esquerda.in", "r");
    if (entrada == NULL) {
        perror("Erro ao abrir o arquivo de entrada");
        return 1;
    }

    while (1) {
        // Leia o n�mero de comandos
        fscanf(entrada, "%d", &N);

        // Verifique o fim da entrada
        if (N == 0) {
            break;
        }

        // Leia a s�rie de comandos
        fscanf(entrada, "%s", comandos);

        // Calcule a dire��o final
        char direcaoFinal = calcularDirecaoInicial(comandos, N);

        // Abra o arquivo de sa�da
        FILE *saida = fopen("esquerda.out", "a");
        if (saida == NULL) {
            perror("Erro ao abrir o arquivo de sa�da");
            return 1;
        }

        // Escreva a dire��o final no arquivo de sa�da
        fprintf(saida, "%c\n", direcaoFinal);

        // Feche o arquivo de sa�da
        fclose(saida);
    }

    // Feche o arquivo de entrada
    fclose(entrada);

    return 0;
}

