#include <stdio.h>
#include <locale.h>
int main() {
	setlocale(LC_ALL,"");
	
    int N, F;

    FILE *entrada = fopen("suco.in", "r");
    FILE *saida = fopen("suco.out", "w");

		 if(entrada == NULL)
			printf("Erro, não foi possível abrir o arquivo\n");
	else{
        fscanf(entrada, "%d %d", &N, &F);

        float volumeSuco = (float) F * 50 / (N * 1000);
    	fprintf(saida, "%.2f\n", volumeSuco);
    }
    	
    fclose(entrada);
    fclose(saida);

    return 0;
}

