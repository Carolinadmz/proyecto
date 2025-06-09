"use client"

import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs({ searchComponent, tableComponent }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "var(--purple-800, #6b46c1)",
            },
            "& .MuiTab-root": {
              color: "#666",
              "&.Mui-selected": {
                color: "var(--purple-800, #6b46c1)",
              },
              "&:hover": {
                color: "var(--purple-600, #7c3aed)",
              },
            },
          }}
        >
          <Tab
            label={
              <span>
                <i className="fas fa-list me-2"></i>
                Lista de Contactos
              </span>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <span>
                <i className="fas fa-plus me-2"></i>
                Agregar Contacto
              </span>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <span>
                <i className="fas fa-chart-bar me-2"></i>
                Estadísticas
              </span>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <span>
                <i className="fas fa-cog me-2"></i>
                Configuración
              </span>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        {searchComponent}
        {tableComponent}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <i className="fas fa-user-plus me-2"></i>
              Agregar Nuevo Contacto
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" placeholder="Ingrese el nombre" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Ingrese el email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" placeholder="Ingrese el teléfono" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Empresa</label>
                  <input type="text" className="form-control" placeholder="Ingrese la empresa" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cargo</label>
                  <input type="text" className="form-control" placeholder="Ingrese el cargo" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <select className="form-select">
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">
              <i className="fas fa-save me-2"></i>
              Guardar Contacto
            </button>
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <i className="fas fa-chart-line me-2"></i>
              Estadísticas de Contactos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-center border-primary">
                  <div className="card-body">
                    <h5 className="card-title">Total</h5>
                    <h2 className="text-primary">3</h2>
                    <p className="card-text">Contactos registrados</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-success">
                  <div className="card-body">
                    <h5 className="card-title">Activos</h5>
                    <h2 className="text-success">2</h2>
                    <p className="card-text">Contactos activos</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-warning">
                  <div className="card-body">
                    <h5 className="card-title">Inactivos</h5>
                    <h2 className="text-warning">1</h2>
                    <p className="card-text">Contactos inactivos</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center border-info">
                  <div className="card-body">
                    <h5 className="card-title">Nuevos</h5>
                    <h2 className="text-info">3</h2>
                    <p className="card-text">Este mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">
              <i className="fas fa-cogs me-2"></i>
              Configuración de Contactos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h6>Campos Visibles</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked id="showId" />
                  <label className="form-check-label" htmlFor="showId">
                    Mostrar ID
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked id="showEmail" />
                  <label className="form-check-label" htmlFor="showEmail">
                    Mostrar Email
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultChecked id="showPhone" />
                  <label className="form-check-label" htmlFor="showPhone">
                    Mostrar Teléfono
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <h6>Opciones de Exportación</h6>
                <button className="btn btn-outline-primary me-2 mb-2">
                  <i className="fas fa-file-excel me-2"></i>
                  Exportar a Excel
                </button>
                <button className="btn btn-outline-secondary me-2 mb-2">
                  <i className="fas fa-file-pdf me-2"></i>
                  Exportar a PDF
                </button>
                <button className="btn btn-outline-info mb-2">
                  <i className="fas fa-file-csv me-2"></i>
                  Exportar a CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  )
}
