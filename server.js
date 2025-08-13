import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nlp from "compromise";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Glicemia
app.post("/analisar-glicemia", (req, res) => {
    const { glicemia } = req.body;
    let recomendacao = "💡 Mantenha hábitos saudáveis!";

    if (!glicemia) {
        recomendacao = "❌ Valor inválido. Por favor, insira a glicemia.";
    } else if (glicemia < 70) {
        recomendacao = "⚠️ Atenção! Glicemia baixa. Consuma algo doce e consulte seu médico.";
    } else if (glicemia <= 140) {
        recomendacao = "✅ Glicemia dentro do normal. Continue monitorando.";
    } else if (glicemia <= 180) {
        recomendacao = "⚠️ Glicemia elevada. Fique atento aos próximos registros.";
    } else {
        recomendacao = "⚠️ Atenção! Glicemia muito alta. Consulte seu médico o quanto antes.";
    }

    res.json({ recomendacao });
});

// Alimentação
app.post("/analisar-alimentacao", (req, res) => {
    const { descricao } = req.body;

    if (!descricao || descricao.trim() === "") {
        return res.json({ recomendacao: "❌ Nenhuma informação sobre os alimentos." });
    }

    const doc = nlp(descricao.toLowerCase());

    const alimentosRuins = ["batata frita", "salgado", "refrigerante", "chocolate", "bolo", "pizza", "biscuits", "fritura"];
    const alimentosBons = ["fruta", "verdura", "salada", "aveia", "legume", "ovo", "peixe", "arroz integral"];

    let recomendacao = "💡 Mantenha hábitos saudáveis!";

    const temRuins = alimentosRuins.some(alimento => doc.has(alimento));
    const temBons = alimentosBons.some(alimento => doc.has(alimento));

    if (temRuins && !temBons) {
        recomendacao = "⚠️ Atenção! Alimentos pouco saudáveis. Tente incluir opções mais nutritivas.";
    } else if (temBons && !temRuins) {
        recomendacao = "✅ Ótimo! Continue incluindo alimentos saudáveis na sua dieta.";
    } else if (temRuins && temBons) {
        recomendacao = "⚠️ Misturou alimentos saudáveis e não saudáveis. Tente equilibrar melhor as refeições.";
    }

    res.json({ recomendacao });
});

// Sintomas
app.post("/analisar-sintomas", (req, res) => {
    const { sintomas, intensidade } = req.body;
    let recomendacao = "💡 Acompanhe seus sintomas e registre regularmente.";

    if (!sintomas || sintomas.length === 0) {
        recomendacao = "❌ Nenhum sintoma registrado.";
    } else if (intensidade === "intensa") {
        recomendacao = "⚠️ Sintomas intensos! Procure atendimento médico imediatamente.";
    } else if (intensidade === "moderada") {
        recomendacao = "⚠️ Sintomas moderados. Fique atento e registre próximos episódios.";
    } else {
        recomendacao = "✅ Sintomas leves. Continue monitorando.";
    }

    res.json({ recomendacao });
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});