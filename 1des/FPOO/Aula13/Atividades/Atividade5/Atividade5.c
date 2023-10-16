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
		do{
		
        fscanf(entrada, "%d %d", &N, &F);
		if(N == 0 && F == 0) break;
        float volumeSuco = (float) F * 50 / (N * 1000);
    	fprintf(saida, "%.2f\n", volumeSuco);
    	
   	 	}while(N != 0 && F != 0);
    }
    	
    fclose(entrada);
    fclose(saida);

    return 0;
}

