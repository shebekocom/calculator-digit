import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// import CalculatorTabs from './components/calculator-tabs/calculator-tabs';
import LoanTab from './components/loan-tab/loan-tab';
import LeaseTab from './components/lease-tab/lease-tab';
import InfoCard from './components/infocard/infocard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // activeTabIndex: 0,
      classLoan: 'calculator_wrapper_loan',
      classLease: 'calculator_wrapper_lease active',
      loan: {
        price: '37813',
        terms: [12, 24, 36, 48, 72, 84],
        traidIn: 0,
        downPayment: 0,
        creditScore: [650, 750, 850, 900],
        apr: 3,
      },
      lease: {
        zipCode: '918999',
        downPayment: '1000',
        traidIn: '0',
        creditScore: ['650', '750', '850', '900'],
        annualMiles: ['10000', '12000', '15000'],
        term: ['24', '36', '48'],
      },
    };
    this.changeCalculator = this.changeCalculator.bind(this);
  }

  changeCalculator(tabs) {
    // console.log(classLoan);
    if (tabs === 'loan') {
      this.setState({
        classLease: 'calculator_wrapper_lease',
        classLoan: 'calculator_wrapper_loan active',
      });
    } else {
      this.setState({
        classLease: 'calculator_wrapper_lease active',
        classLoan: 'calculator_wrapper_loan',
      });
    }
  }
  // changeTab(newActiveTabIndex) {
  //   this.setState({
  //     activeTabIndex: newActiveTabIndex,
  //   });
  // }

  render() {
    const { loan, lease, classLoan, classLease } = this.state;
    return (
      <div className="app">
        <div className={classLoan}>
          <div className="calculator_tabs">
            <div className="calculator_tabs_loan">
              <div
                className="calculator_tabs-item"
                onClick={this.changeCalculator.bind(this, 'loan')}
                onKeyDown={this.changeCalculator.bind(this, 'loan')}
                role="button"
                tabIndex={0}
              >
                <p className="calculator_tabs-item--hint">Est.Loan:</p>
                <p className="calculator_tabs-item--price">
                  $683<span className="calculator_tabs-item--hint">/mo</span>
                </p>
              </div>
              <div
                className="calculator_tabs-item"
                onClick={this.changeCalculator.bind(this, 'lease')}
                onKeyDown={this.changeCalculator.bind(this, 'lease')}
                role="button"
                tabIndex={0}
              >
                <p className="calculator_tabs-item--hint">Est.Lease:</p>
                <p className="calculator_tabs-item--price">
                  $511<span className="calculator_tabs-item--hint">/mo</span>
                </p>
              </div>
            </div>
          </div>
          <LoanTab loan={loan} />
        </div>
        <div className={classLease}>
          <div className="calculator_tabs_lease">
            <div
              className="calculator_tabs_lease-item"
              onClick={this.changeCalculator.bind(this, 'loan')}
              onKeyDown={this.changeCalculator.bind(this, 'loan')}
              role="button"
              tabIndex={0}
            >
              <p className="calculator_tabs_lease-item--title">Loan</p>
            </div>
            <div
              className="calculator_tabs_lease-item"
              onClick={this.changeCalculator.bind(this, 'lease')}
              onKeyDown={this.changeCalculator.bind(this, 'lease')}
              role="button"
              tabIndex={0}
            >
              <p className="calculator_tabs_lease-item--title">Lease</p>
            </div>
          </div>
          <LeaseTab lease={lease} />
        </div>
        <div className="infocard_wrapper">
          <InfoCard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
