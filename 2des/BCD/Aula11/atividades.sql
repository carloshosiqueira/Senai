-- Crie um procedimento chamado **calcSubtotais()** qua quando for chamado calcule todos os subtotais da tabela de alugueis
DELIMITER //
CREATE PROCEDURE calcSubtotais()
BEGIN
    UPDATE Aluguel a SET a.subtotal = (
        SELECT SUM(datediff(a.devolucao, a.retirada) * v.diaria)
                      FROM Veiculo v
                      WHERE v.placa = a.placa);
END //
DELIMITER ;


-- Crie um gatilho que seja executado após qualquer update na tabela Aluguel calculando o subtotal
DELIMITER //
CREATE TRIGGER calc_subtotal BEFORE UPDATE ON Aluguel FOR EACH ROW
BEGIN
    DECLARE v_subtotal DECIMAL(10, 2);
 
    SELECT SUM(DATEDIFF(NEW.devolucao, NEW.retirada) * v.diaria)
    INTO v_subtotal
    FROM Veiculo v
    WHERE v.placa = NEW.placa;

    SET NEW.subtotal = v_subtotal;
END //
DELIMITER ;
