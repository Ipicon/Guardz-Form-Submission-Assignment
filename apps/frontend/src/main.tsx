import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EntitiesPage, AddEntityPage } from '@/pages/entities';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntitiesPage />} />
        <Route path="/add-entity" element={<AddEntityPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
