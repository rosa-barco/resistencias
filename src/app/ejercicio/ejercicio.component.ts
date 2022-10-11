import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  display="none";
  display2="none";

  banda1: string = '';
  banda2: string = '';
  banda3: string = '';
  tolerancia: string = '';

  valor: string = "";
  valorMax: number = 0;
  valorMin: number = 0;

  color1: string = "";
  color2: string = "";
  color3: string = "";
  color4: string = "";

  colorfondo1: string = "";
  colorletra1: string = "#212529";

  colorfondo2: string = "";
  colorletra2: string = "#212529";

  colorfondo3: string = "";
  colorletra3: string = "#212529";

  colorfondo4: string = "";
  colorletra4: string = "#212529";

  calcular() {

    if(this.banda1 == '' || this.banda2 == '' || this.banda3 == '' || this.tolerancia == ''){
      this.display="none";
      this.display2="inline-block"
    }else{
      this.display="inline-block";
      this.display2="none";
    }

    let color1: string = '';
    let colorfondo1: string = '';
    let colorletra1: string = '';

    let color2: string = '';
    let colorfondo2: string = '';
    let colorletra2: string = '';

    let color3: string = '';
    let colorfondo3: string = '';
    let colorletra3: string = '';

    let banda3;

    let color4: string = '';
    let colorfondo4: string = '';
    let colorletra4: string = '';

    let mas:number = 0;
    let menos:number = 0;

    switch (this.banda1) {
      case '0':
        color1 = "Negro";
        colorfondo1 = "#212529";
        colorletra1 = "#FAFAFA";
        break;
      case '1':
        color1 = "Café";
        colorfondo1 = "#4B3121";
        colorletra1 = "#FAFAFA";
        break;
      case '2':
        color1 = "Rojo";
        colorfondo1 = "#FF0000";
        colorletra1 = "#FAFAFA";
        break;
      case '3':
        color1 = "Naranja";
        colorfondo1 = "#FF7F00";
        colorletra1 = "#212529";
        break;
      case '4':
        color1 = "Amarillo";
        colorfondo1 = "#FFFF00";
        colorletra1 = "#212529";
        break;
      case '5':
        color1 = "Verde";
        colorfondo1 = "#00FF00";
        colorletra1 = "#212529";
        break;
      case '6':
        color1 = "Azul";
        colorfondo1 = "#0000FF";
        colorletra1 = "#FAFAFA";
        break;
      case '7':
        color1 = "Violeta"
        colorfondo1 = "#8B00FF";
        colorletra1 = "#FAFAFA";
        break;
      case '8':
        color1 = "Gris";
        colorfondo1 = "#CDCDCD";
        colorletra1 = "#212529";
        break;
      case '9':
        color1 = "Blanco";
        colorfondo1 = "#FAFAFA";
        colorletra1 = "#212529";
        break;
    }

    switch (this.banda2) {
      case '0':
        color2 = "Negro";
        colorfondo2 = "#212529";
        colorletra2 = "#FAFAFA";
        break;
      case '1':
        color2 = "Café";
        colorfondo2 = "#4B3121";
        colorletra2 = "#FAFAFA";
        break;
      case '2':
        color2 = "Rojo";
        colorfondo2 = "#FF0000";
        colorletra2 = "#FAFAFA";
        break;
      case '3':
        color2 = "Naranja";
        colorfondo2 = "#FF7F00";
        colorletra2 = "#212529";
        break;
      case '4':
        color2 = "Amarillo";
        colorfondo2 = "#FFFF00";
        colorletra2 = "#212529";
        break;
      case '5':
        color2 = "Verde";
        colorfondo2 = "#00FF00";
        colorletra2 = "#212529";
        break;
      case '6':
        color2 = "Azul";
        colorfondo2 = "#0000FF";
        colorletra2 = "#FAFAFA";
        break;
      case '7':
        color2 = "Violeta"
        colorfondo2 = "#8B00FF";
        colorletra2 = "#FAFAFA";
        break;
      case '8':
        color2 = "Gris";
        colorfondo2 = "#CDCDCD";
        colorletra2 = "#212529";
        break;
      case '9':
        color2 = "Blanco";
        colorfondo2 = "#FAFAFA";
        colorletra2 = "#212529";
        break;
    }

    switch (this.banda3) {
      case '0':
        color3 = "Negro";
        colorfondo3 = "#212529";
        colorletra3 = "#FAFAFA";
        banda3 = "";
        break;
      case '1':
        color3 = "Café";
        colorfondo3 = "#4B3121";
        colorletra3 = "#FAFAFA";
        banda3 = "0";
        break;
      case '2':
        color3 = "Rojo";
        colorfondo3 = "#FF0000";
        colorletra3 = "#FAFAFA";
        banda3 = "00";
        break;
      case '3':
        color3 = "Naranja";
        colorfondo3 = "#FF7F00";
        colorletra3 = "#212529";
        banda3 = "000";
        break;
      case '4':
        color3 = "Amarillo";
        colorfondo3 = "#FFFF00";
        colorletra3 = "#212529";
        banda3 = "0000";
        break;
      case '5':
        color3 = "Verde";
        colorfondo3 = "#00FF00";
        colorletra3 = "#212529";
        banda3 = "00000";
        break;
      case '6':
        color3 = "Azul";
        colorfondo3 = "#0000FF";
        colorletra3 = "#FAFAFA";
        banda3 = "000000";
        break;
      case '7':
        color3 = "Violeta"
        colorfondo3 = "#8B00FF";
        colorletra3 = "#FAFAFA";
        banda3 = "0000000";
        break;
      case '8':
        color3 = "Gris";
        colorfondo3 = "#CDCDCD";
        colorletra3 = "#212529";
        banda3 = "00000000";
        break;
      case '9':
        color3 = "Blanco";
        colorfondo3 = "#FAFAFA";
        colorletra3 = "#212529";
        banda3 = "000000000";
        break;
    }

    switch (this.tolerancia) {
      case '1':
        color4 = "Dorado 5%";
        colorfondo4 = "#EABE3F";
        colorletra4 = "#FAFAFA";
        mas = 1.05;
        menos = 0.95;
        break;
      case '2':
        color4 = "Plata 10%";
        colorfondo4 = "#BEBEBE";
        colorletra4 = "#212529";
        mas = 1.10;
        menos = 0.90;
        break;
      case '3':
        color4 = "Café 1%";
        colorfondo4 = "#4B3121";
        colorletra4 = "#FAFAFA";
        mas = 1.01;
        menos = 0.99;
        break;
      case '4':
        color4 = "Rojo 2%";
        colorfondo4 = "#FF0000";
        colorletra4 = "#FAFAFA";
        mas = 1.02;
        menos = 0.98;
        break;
      case '5':
        color4 = "Verde 0.5%";
        colorfondo4 = "#00FF00";
        colorletra4 = "#212529";
        mas = 1.005;
        menos = 0.995;
        break;
      case '6':
        color4 = "Azul 0.25%";
        colorfondo4 = "#0000FF";
        colorletra4 = "#FAFAFA";
        mas = 1.025;
        menos = 0.975;
        break;
      case '7':
        color4 = "Violeta 0.1%";
        colorfondo4 = "#8B00FF";
        colorletra4 = "#FAFAFA";
        mas = 1.001;
        menos = 0.999;
        break;
      case '8':
        color4 = "Gris 0.05%";
        colorfondo4 = "#CDCDCD";
        colorletra4 = "#212529";
        mas = 1.0005;
        menos = 0.9995;
        break;
    }

    this.valor = this.banda1 + this.banda2 + banda3;

    this.valorMax = Number(this.valor) * mas;
    this.valorMin = Number(this.valor) * menos;

    this.color1 = color1;
    this.colorfondo1 = colorfondo1;
    this.colorletra1 = colorletra1;

    this.color2 = color2;
    this.colorfondo2 = colorfondo2;
    this.colorletra2 = colorletra2;

    this.color3 = color3;
    this.colorfondo3 = colorfondo3;
    this.colorletra3 = colorletra3;

    this.color4 = color4;
    this.colorfondo4 = colorfondo4;
    this.colorletra4 = colorletra4;
  }

  limpiar(){
    this.banda1 = '';
    this.banda2 = '';
    this.banda3 = '';
    this.tolerancia = '';

    this.display="none";
    this.display2="none";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
