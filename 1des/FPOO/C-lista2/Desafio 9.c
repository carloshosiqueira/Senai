/*9 Desenvolva um algortimo que fa�o o c�lculo do reajuste salarial do funcion�rio, baseado nos seguintes par�metros:
15% de aumento : 1.500,00 <= salario Atual < 1.750,00
12% de aumento : 1.750,00 <= salario Atual < 2.000,00
9% de aumento : 2.000,00 <= salario Atual < 3.000,00
6% de aumento : salario Atual >= 3.000,00
*/
#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL, "");
	//Declara��o de Vari�veis
	float salario, reajustado;
	//Entrada
	printf("Qual � o sal�rio do funcion�rio? ");
	scanf("%f",&salario);
	//Processamento
	if(salario >= 3000.00 ) reajustado = salario * 1.06;
	else if(salario >= 2000.00 ) reajustado = salario * 1.09;
	else if(salario >= 1750.00 ) reajustado = salario * 1.12;
	else if(salario >= 1500.00 ) reajustado = salario * 1.15;
	else salario = salario;
	//Sa�da
	if(salario >= 1500)
		printf("O sal�rio reajustado tem como valor %.2f reais",reajustado);
	else
		printf("N�o foi passada informa��es para o reajuste");


	return 0;
}
