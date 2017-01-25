/**
 * @author Everton Carvalho [evertonocarvalho@gmail.com] 
 */

var app = angular.module("listaTelefonica", ["ngMessages"]);
app.controller("listaTelefonicaController", function ($scope, $filter) {
	$scope.app = "Lista Telefônica";

	$scope.contatos = [
		{nome: "Pedro", telefone: "9999-8888", cor: "blue", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
		{nome: "Ana", telefone: "9999-8877", cor: "yellow", data: new Date(), operadora: {nome: "VIVO", codigo: 15, categoria: "Celular"}},
		{nome: "Maria", telefone: "9999-8866", cor: "red", data: new Date(), operadora: {nome: "TIM", codigo: 41, categoria: "Celular"}}
	];

	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
		{nome: "VIVO", codigo: 15, categoria: "Celular", preco: 1},
		{nome: "TIM", codigo: 41, categoria: "Celular", preco: 3},
		{nome: "Claro", codigo: 21, categoria: "Celular", preco: 2},
		{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];

	$scope.adicionarContato = function (contato) {
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	}

	$scope.ordenarPor = function (campo) {
		$scope.campoOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	}
});