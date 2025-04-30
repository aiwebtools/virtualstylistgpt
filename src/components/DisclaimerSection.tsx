
import { Card } from "@/components/ui/card";

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Legal <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Disclaimer</span>
          </h2>
        </div>

        <Card className="glass-card border-0">
          <div className="p-6 md:p-8 text-gray-300">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Service Disclaimer</h3>
                <p>
                  Virtual Stylist GPT is an AI-powered visualization tool provided for entertainment and 
                  informational purposes only. The images generated are simulations and may not perfectly 
                  represent how clothing items will actually look or fit on you in reality. 
                  All generated content is created by artificial intelligence and should not be considered 
                  professional styling or fashion advice.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Image Rights & Usage</h3>
                <p>
                  By uploading photos to Virtual Stylist GPT, you confirm that you have the right to use these images 
                  and grant permission for them to be processed by our AI system for the purpose of generating virtual 
                  try-on images. The generated images are provided for personal use only and should not be used for 
                  commercial purposes without proper authorization.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Limitation of Liability</h3>
                <p>
                  AI WEB TOOLS LLC and its affiliates make no warranties, express or implied, regarding the accuracy, 
                  reliability, or quality of the virtual try-on results. We shall not be liable for any direct, indirect, 
                  incidental, consequential, or punitive damages arising out of your access to or use of Virtual Stylist GPT.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Third-Party Services</h3>
                <p>
                  Virtual Stylist GPT utilizes OpenAI's technology. Your use of this service is also subject to 
                  OpenAI's terms of service and privacy policies. We are not responsible for the practices of any 
                  third-party services linked from this site.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">Data Privacy</h3>
                <p>
                  Any images you upload are used solely for the purpose of generating virtual try-on results and are 
                  processed in accordance with our Privacy Policy and OpenAI's data handling practices. We do not claim 
                  ownership of your uploaded images. By using Virtual Stylist GPT, you agree to OpenAI's privacy policy 
                  which can be found <a href="https://openai.com/policies/privacy-policy/" className="text-cyberpunk-blue underline">here</a>.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="font-medium">
                  By using Virtual Stylist GPT, you acknowledge that you have read, understood, and agree to these terms 
                  and conditions. If you do not agree with any part of this disclaimer, please refrain from using the service.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DisclaimerSection;
