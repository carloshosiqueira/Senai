#include<stdio.h>
int main(){
	int a;
	int b;
	int c;
	printf("Quanto mede o lado a? ");
	scanf("%d",&a);
	printf("Quanto mede o lado b? ");
	scanf("%d",&b);
	printf("Quanto mede o lado c? ");
	scanf("%d",&c);
	if (a == b && b == c) printf("E um triangulo equilatero");
	else if (a != b && a != c && b != c) printf("E um triangulo escaleno");
	else printf("E um triangulo isoceles");
}
