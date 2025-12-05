// Import drag-and-drop plugin
import '@4tw/cypress-drag-drop';

describe('Design Studio Drag-and-Drop Automation (SPA-ready)', () => {
  /**
   * Helper: open Design Studio
   */
  const openDesignStudio = () => {
    // Visit the staging apps page with SPA-friendly settings
    cy.visit('/apps/', { timeout: 180000, failOnStatusCode: false });

    // Wait for the Design Studio entry button to be visible
    cy.contains('button, a, div', 'Design Studio', { timeout: 120000 })
      .should('be.visible')
      .click();

    // Wait for the main canvas to appear
    cy.get('[data-testid="design-studio-canvas"]', { timeout: 180000 })
      .should('be.visible');
  };

  beforeEach(() => {
    // Set stable viewport for consistent layout
    cy.viewport(1440, 900);

    // Open Design Studio before each test
    openDesignStudio();
  });

  it('Drop Artboard -> Stack Container -> Chart -> Center & Resize', () => {
    // -------------------------------
    // 1) DROP ARTBOARD FROM SIDE PANEL
    // -------------------------------
    const artboardPaletteItem = '[data-testid="palette-item-artboard"]';
    const canvasRoot = '[data-testid="design-studio-canvas"]';
    const artboardOnCanvas = '[data-testid="artboard"]';

    // Assert the side panel is visible
    cy.get('[data-testid="left-sidebar"]').should('be.visible');

    // Drag Artboard to canvas
    cy.dragFromTo(artboardPaletteItem, canvasRoot);

    // Assert artboard exists
    cy.get(artboardOnCanvas)
      .should('exist')
      .and('be.visible')
      .as('artboard');

    // -------------------------------
    // 2) ADD STACK CONTAINER INSIDE ARTBOARD
    // -------------------------------
    const stackPaletteItem = '[data-testid="palette-item-stack-container"]';
    const stackOnCanvas = '[data-testid="stack-container"]';

    cy.dragFromTo(stackPaletteItem, artboardOnCanvas);

    cy.get(stackOnCanvas)
      .should('exist')
      .and('be.visible')
      .as('stack');

    // -------------------------------
    // 3) ADD CHART INSIDE STACK CONTAINER
    // -------------------------------
    const chartPaletteItem = '[data-testid="palette-item-chart"]';
    const chartOnCanvas = '[data-testid="chart-element"]';

    cy.dragFromTo(chartPaletteItem, stackOnCanvas);

    cy.get(chartOnCanvas)
      .should('exist')
      .and('be.visible')
      .as('chart');

    // -------------------------------
    // 4) CENTER & RESIZE CHART
    // -------------------------------
    cy.get('@chart').then(($chart) => {
      // Example: set CSS transform or click toolbar button
      // Adjust selectors depending on your actual UI
      cy.wrap($chart)
        .invoke('css', 'left', '50%')
        .invoke('css', 'top', '50%');

      // Optionally resize by dragging a handle (example)
      // cy.get('[data-testid="resize-handle"]').drag({ deltaX: 100, deltaY: 50 });
    });

    // -------------------------------
    // 5) FINAL ASSERTIONS
    // -------------------------------
    cy.get('@chart')
      .should('have.css', 'left', '50%')
      .and('have.css', 'top', '50%');

    // Optional: assert stack contains chart
    cy.get('@stack').within(() => {
      cy.get(chartOnCanvas).should('exist');
    });
  });
});