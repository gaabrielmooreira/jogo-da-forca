export default function Jogo(props) {
    const {desabilitarJogo, setDesabilitarJogo, forcaImg, palavraTela, atualizarPalavraTela, acabouJogo} = props;

    function comecarJogo() {
        setDesabilitarJogo(false);
        atualizarPalavraTela();
    }

    return (
        <div className="jogo">
            <div className="forca">
                <img src={forcaImg} alt="Forca" />
                <div>
                    <button onClick={comecarJogo} className="botao-iniciar" disabled={desabilitarJogo === true ? false : true}>Escolher Palavra</button>
                    <p className={(desabilitarJogo === true && acabouJogo === false )? "desabilitar" : ""}>{palavraTela}</p>
                </div>
            </div>
        </div>
    )
}


