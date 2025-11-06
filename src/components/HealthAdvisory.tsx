import { AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const HealthAdvisory = () => {
  return (
    <section className="py-16 bg-destructive/10">
      <div className="container mx-auto px-4">
        <Alert className="border-2 border-destructive bg-card shadow-elevated max-w-4xl mx-auto">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          <AlertTitle className="font-serif text-2xl mb-4 text-destructive">
            ⚕️ Health & Safety Advisory
          </AlertTitle>
          <AlertDescription className="space-y-4 text-card-foreground">
            <p className="text-lg leading-relaxed">
              Diseases moved between continents just like food and ideas, 
              causing terrible harm to people on both sides of the Atlantic.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Europe to Americas */}
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-5 h-5 text-destructive" />
                  <h4 className="font-semibold text-lg">From Europe → Americas</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Smallpox</strong> - Decimated indigenous populations with no immunity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Measles</strong> - Spread rapidly through vulnerable communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Typhus</strong> - Brought devastation to New World settlements</span>
                  </li>
                </ul>
              </div>

              {/* Americas to Europe */}
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowLeft className="w-5 h-5 text-destructive" />
                  <h4 className="font-semibold text-lg">From Americas → Europe</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Syphilis</strong> - Historians debate its American origins and European spread</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Possible novel diseases</strong> - Some scholars suggest other pathogens may have traveled east</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm italic text-muted-foreground mt-6 border-t border-border pt-4">
              Note: Disease was the most tragic part of the Columbian Exchange. 
              Indigenous Americans had no immunity to European diseases, which killed millions of people.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default HealthAdvisory;
