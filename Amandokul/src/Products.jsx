import React from 'react';
import robotImage from './assets/robot.png';
import buscarImage from './assets/buscar.png';
import laptopHpImage from './assets/laptophp.png';
import samsungImage from './assets/samsung.png';
import tenisImage from './assets/tenis.png';
import adidasImage from './assets/adidas.png';
import oasterImage from './assets/oaster.png';
import playImage from './assets/play.png';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <header className="products-header">
        <img src={robotImage} alt="Robot" className="robot-image" />
        <h1 className="chopping-title">Chopping - Productos</h1>
        <div className="search-bar">
          <img src={buscarImage} alt="Buscar" className="search-icon" />
          <input type="text" placeholder="Buscar por categoría (e.g., Tecnología)" />
        </div>
      </header>
      
      <main className="products-main">
        <aside className="filters-section">
          <h2>Filtrar por</h2>
          <label>Rango de precios:
            <select>
              <option>$0 - $100</option>
              <option>$100 - $200</option>
              <option>$200 - $500</option>
              <option>$500+</option>
            </select>
          </label>
          <label>Cantidad disponible:
            <select>
              <option>1 - 10</option>
              <option>11 - 20</option>
              <option>21 - 50</option>
              <option>50+</option>
            </select>
          </label>
          <button className="apply-filters">Aplicar filtros</button>
        </aside>
        
        <section className="products-list">
          <div className="product-card">
            <img src={laptopHpImage} alt="Laptop HP" className="product-image" />
            <h3>Laptop HP</h3>
            <p>Laptop de alta gama</p>
            <p className="product-price">$599.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={samsungImage} alt="Celular Samsung" className="product-image" />
            <h3>Celular Samsung</h3>
            <p>Smartphone con excelente cámara</p>
            <p className="product-price">$399.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={tenisImage} alt="Tenis Nike" className="product-image" />
            <h3>Tenis Nike</h3>
            <p>Calzado deportivo</p>
            <p className="product-price">$99.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={adidasImage} alt="Playera Adidas" className="product-image" />
            <h3>Playera Adidas</h3>
            <p>Playera deportiva</p>
            <p className="product-price">$29.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={oasterImage} alt="Licuadora Oster" className="product-image" />
            <h3>Licuadora Oster</h3>
            <p>Licuadora multifuncional</p>
            <p className="product-price">$49.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
          <div className="product-card">
            <img src={playImage} alt="Consola PlayStation 5" className="product-image" />
            <h3>Consola PlayStation 5</h3>
            <p>Consola de última generación</p>
            <p className="product-price">$499.99</p>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        © 2023-2024, Chopping, Inc. o sus afiliados
      </footer>
    </div>
  );
};

export default Products;
