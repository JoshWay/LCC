'use client';

import { useDashboardSummary, useSettings } from '@/hooks';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Sun, Package, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export default function Home() {
  const { toggleTheme, theme } = useSettings();
  const summary = useDashboardSummary();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Liquidation Command Center</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6">
        {/* Dashboard Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

          {/* Summary Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {/* Total Items */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">{summary.totalItems}</div>
                <p className="text-xs text-muted-foreground">
                  {summary.availableItems} available
                </p>
              </CardContent>
            </Card>

            {/* Maximum Total */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-sm font-medium">Maximum</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(summary.totalMax)}
                </div>
                <p className="text-xs text-muted-foreground">Aspirational</p>
              </CardContent>
            </Card>

            {/* Balanced Total */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-sm font-medium">Balanced</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {formatCurrency(summary.totalBalanced)}
                </div>
                <p className="text-xs text-muted-foreground">Fair market</p>
              </CardContent>
            </Card>

            {/* Quick Sale Total */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-sm font-medium">Quick Sale</CardTitle>
                <DollarSign className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {formatCurrency(summary.totalQuick)}
                </div>
                <p className="text-xs text-muted-foreground">Floor price</p>
              </CardContent>
            </Card>

            {/* Revenue */}
            <Card className="col-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                <CardTitle className="text-sm font-medium">Revenue Collected</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">
                  {formatCurrency(summary.totalRevenue)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {summary.soldItems} items sold
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Empty State */}
        {summary.totalItems === 0 && (
          <Card className="p-8 text-center">
            <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No items yet</h3>
            <p className="text-muted-foreground mb-4">
              Add your first item to get started tracking your inventory.
            </p>
            <Button>Add Item</Button>
          </Card>
        )}
      </main>
    </div>
  );
}
