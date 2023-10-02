#include <stdio.h>
#include <locale.h>
int direcoes;

char direcao(char *direcoes, int quantidade) {
	
    char direcaoAtual = 'N';
    int i;

    for (i = 0; i < quantidade; i++) {
        if (direcoes[i] == 'E') {         
                if(direcaoAtual == 'N')
                	direcaoAtual = 'O';
                else if(direcaoAtual == 'L')
                	direcaoAtual = 'N';
                else if(direcaoAtual == 'S')
                	direcaoAtual = 'L';
                else if(direcaoAtual == 'O')
                	direcaoAtual = 'S';  
            }
		if(direcoes[i] == 'D'){
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
	setlocale(LC_ALL,"");
	
    int quantidade;
    char comandos[1000];

    FILE *entrada = fopen("esquerda.in", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir o arquivo de entrada");
        return 1;
    }
        fscanf(entrada, "%d", &quantidade);//ler a primeira linha(quantidade)

        fscanf(entrada, "%s", &comandos); //ler a string de comandos

        char direcaoFinal = direcao(comandos, quantidade);

        
        FILE *saida = fopen("esquerda.out", "w");
        if (saida == NULL) {
            printf("Erro ao abrir o arquivo de saída");
            return 1;
        }
		else{
        	fprintf(saida, "%c\n", direcaoFinal);
        }

        fclose(saida);
        
   		fclose(entrada);

    return 0;
}

