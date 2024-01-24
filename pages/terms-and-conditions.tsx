import { Heading } from "lucide-react";
//import React from "react";
//import { Heading } from "@/components/heading";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
       
      <div className="prose">
        <h2>Terms and conditions</h2>
        <section>
          <strong className="text-2xl font-semibold mb-4">1. Acceptance of Terms:</strong>
          <p>
            By accessing or using Scholares services, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">2. User Conduct:</strong>
          <p>a. Users are expected to use the platform responsibly, adhering to ethical standards and applicable laws.</p>
          <p>b. Account holders are responsible for maintaining the security of their login credentials.</p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">3. Intellectual Property:</strong>
          <p>a. Generated content is owned by the user, promoting intellectual property rights and creativity.</p>
          <p>b. Scholare retains ownership of the platform, including its design, code, and other proprietary elements.</p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">4. Prohibited Activities:</strong>
          <p>
            a. Users are prohibited from engaging in activities that may harm the platform, other users, or violate legal
            and ethical standards.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">5. Termination:</strong>
          <p>
            Scholare reserves the right to terminate or suspend user accounts for violations of these terms or any other
            reason deemed necessary.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties:</strong>
          <p>
            a. Scholare provides its services as is without any warranties regarding the accuracy, reliability, or
            suitability of the generated content.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">7. Limitation of Liability:</strong>
          <p>
            Scholare shall not be liable for any indirect, incidental, special, or consequential damages arising from
            the use or inability to use our services.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">8. Governing Law:</strong>
          <p>
            These Terms of Service are governed by the laws of Jurisdiction, and any disputes shall be resolved
            through arbitration in accordance with the rules of Arbitration Organization.
          </p>
        </section>

        <section>
          <strong className="text-2xl font-semibold mb-4">9. Contact Information:</strong>
          <p>For any questions regarding our Privacy Policy or Terms of Service, please contact us at support@scholare.site .</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
